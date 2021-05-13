import express from 'express';
import htmlRenderer from './htmlRenderer';
import storeConfig from './store';
import {matchRoutes} from 'react-router-config';
import Routes from '../helpers/routes';
import initialState from './initialState.json';
import {createProxyMiddleware} from 'http-proxy-middleware';

const port = 3000;
const app = express();

const proxyDomain = 'http://localhost:49266';

app.use('/api', createProxyMiddleware({
    target: proxyDomain,
    changeOrigin: true
}));

app.use(express.static('public'));

app.get('*', (req, resp)=>{
    const cookie = req.get('cookie') || '';
    const store = storeConfig(initialState, cookie);
    const dataPromises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(dataPromises).then(promResp => {
        resp.send(htmlRenderer(req, store));
    });
});

app.listen(port, ()=>{
    console.log(`started listing to ${port}`);
});


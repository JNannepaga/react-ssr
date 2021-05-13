import Routes from '../helpers/routes';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Serialize from 'serialize-javascript';

export default (req, store)=>{
    const emptyContext = {};
    const content = renderToString(
        <Provider store = {store}>
            <StaticRouter location={req.path} context={emptyContext}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    );

    const html = `
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
        <div id='root'>${content}</div>

        <script>
            window.INITIAL_STATE = ${Serialize(store.getState())}
        </script>
        <script src='client-bundle.js'></script>

        </body>
    </html>
    `;

    return html;
}
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Routes from '../helpers/routes';
import {BrowserRouter} from 'react-router-dom';
import storeConfig from './store';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';

const initialState = window.INITIAL_STATE;
const store = storeConfig(initialState);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>{renderRoutes(Routes)}</Fragment>
        </BrowserRouter>
    </Provider>, document.querySelector('#root'));
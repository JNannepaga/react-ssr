import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../helpers/reducers/rootReducer';
import {logger} from 'redux-logger';
import {client_api} from './api/client_api';
import {custom_middleware} from '../helpers/custom_middleware';

export default (initialState) => {
    const my_middleware = custom_middleware(client_api());
    const middlewares = applyMiddleware(my_middleware, logger);
    const store = createStore(
        rootReducer,
        initialState,
        middlewares
    );
    return store;
}
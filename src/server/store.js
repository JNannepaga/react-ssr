import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../helpers/reducers/rootReducer';
import {logger} from 'redux-logger';
import {custom_middleware} from '../helpers/custom_middleware';
import  {server_api} from './api/server_api';

export default(initialState, cookie) => {
    const my_middleware = custom_middleware(server_api(cookie));
    const middlewares = applyMiddleware(my_middleware, logger);
    const store = createStore(
        rootReducer,
        initialState,
        middlewares
    );
    return store;
}
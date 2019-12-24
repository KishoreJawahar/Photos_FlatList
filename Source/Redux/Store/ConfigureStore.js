import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from '../Reducers/index';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import IndexSagas from '../../Saga/index-sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const middleware = [
    sagaMiddleware,
    logger
];

const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer, applyMiddleware(...middleware));
sagaMiddleware.run(IndexSagas);
export const persistor = persistStore(store);

export default [
    store,
    persistor
];

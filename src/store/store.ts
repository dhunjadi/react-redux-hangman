import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import {watchGameSaga} from './sagas/game';

const persistConfig = {
    key: 'main-root',
    storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(watchGameSaga);

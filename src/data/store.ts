import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer, { REDUCER_TYPES } from './reducers';
import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function configureStore(intialState?: Partial<REDUCER_TYPES>) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    intialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
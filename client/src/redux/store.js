import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    process.env.NODE_ENV === 'development' && composeWithDevTools()
  )
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };

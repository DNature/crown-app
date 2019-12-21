import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'development' && composeWithDevTools()
  )
);

export const persistor = persistStore(store);

export default { store, persistor };

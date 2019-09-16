import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(
    promiseMiddleware
  ))
);

export default store;

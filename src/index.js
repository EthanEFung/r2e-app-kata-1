import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//configure redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
//define middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middlewares = applyMiddleware(thunk, logger);
//combine reducers
import sampleReducer from './reducers/sampleReducer';
const reducers = combineReducers({
  sample: sampleReducer
});
//create store
const store = createStore(reducers, {}, middlewares);
//test an action creator
import sampleAction from './actions/thunks/sampleAction';
store.dispatch(sampleAction());

import App from './App.js';

ReactDOM.render(
  // provide dispatcher to components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
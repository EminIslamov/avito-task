import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import photosReducer from './photosReducer';
import bigImageReducer from './bigImageReducer';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  photos: photosReducer,
  bigImageReducer: bigImageReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

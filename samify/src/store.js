import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import songReducer from './reducers/songsReducer';

const reducer = combineReducers({
  songs: songReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;

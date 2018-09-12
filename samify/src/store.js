import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import songReducer from './reducers/songsReducer';
import artistsReducer from './reducers/artistsReducer';

const reducer = combineReducers({
  songs: songReducer,
  artists: artistsReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  /*skills: skillsReducer,
  projects: projectsReducer,
  user: userReducer,
  activeNavi: navReducer */
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;

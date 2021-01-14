import postsReducer from "./posts-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
// import filterReducer from "./filter-reducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  posts: postsReducer, 
  users: usersReducer, 
  // filter: filterReducer, 
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
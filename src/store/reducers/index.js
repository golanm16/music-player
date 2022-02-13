import loggedReducer from "./login";
import { combineReducers } from "redux";

const reducers = combineReducers({
  loggedIn: loggedReducer,
});

export default reducers;

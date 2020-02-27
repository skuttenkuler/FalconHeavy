import reducer, { AppState } from "../reducers/index";
import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActionObjectTypes } from "../actions/actions";

export default createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActionObjectTypes>)
);

import rockets from "./reducer";
import { combineReducers } from "redux";
import { GetReducerState } from "../utils/actionCreator";

const reducers = {
  rockets
};

export type AppState = GetReducerState<typeof reducers>;
export default combineReducers<AppState>(reducers);
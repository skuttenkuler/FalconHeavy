import {
    createAsyncAction,
    ActionObjectTypes
  } from "../utils/actionCreator";
  import * as types from "./actionTypes";
  import RocketApi from "../utils/api-routes";
  
  const RocketActions = {
    
  
    getRocket: createAsyncAction(
      [types.GET_ROCKET, types.GET_ROCKET_SUCCESS, types.GET_ROCKET_ERROR],
      RocketApi.getRocket
    )
  };
  
  export default RocketActions;
  export type AppActionObjectTypes = ActionObjectTypes<typeof RocketActions>;
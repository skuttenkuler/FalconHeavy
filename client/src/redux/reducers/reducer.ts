import {
    asyncStatusTypes,
    LOADING,
    SUCCESS,
    INIT
  } from "../utils/actionCreator";
  import { RocketResponse } from "../models/Rocket";
  import { AppActionObjectTypes } from "../actions/Actions";
  
  interface Rockets {
    asyncStatus: asyncStatusTypes;
    rockets: RocketResponse[];
  }
  const initialState: Rockets = {
    asyncStatus: INIT,
    rockets: []
  };
  export default function RocketReducer(
    state: Rockets = initialState,
    action: AppActionObjectTypes
  ): Rockets {
    switch (action.type) {
      case "GET_ROCKET":
        return { ...state, asyncStatus: LOADING };
  
      case "GET_ROCKET_SUCCESS":
        return { asyncStatus: SUCCESS, rockets: [action.payload.response] };

      default:
        return state;
    }
  }
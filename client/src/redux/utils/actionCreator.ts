import {AnyAction} from 'redux';
import {ThunkAction } from "redux-thunk";

interface Payload<Request,Response> {
    readonly request:Request;
    readonly response: Response;
}

export interface Action<Type extends string, Request, Response> extends AnyAction {
    readonly type: Type;
    readonly payload: Payload<Request,Response>;

}
export function createAction<Type extends string, Request, Response>(
     type: Type, request: Request, response: Response): Action<Type, Request, Response>{
        return {
            type,
            payload: {
                request,
                response
            }
        };
}

type API<Request,Response> = (args:Request) => Promise<Response>;
export function createAsyncAction< Actions extends string, ActionType extends string, ActionC extends string, State, Request, Response>(
    actions: [Actions,ActionType,ActionC], api: API<Request,Response>){
        return(
            apiArgs: Request): ThunkAction<Promise<Action<ActionType, Request | undefined, Response> | void>, State, undefined,
            | Action<Actions, Request | undefined, {}>
    | Action<ActionType, Request | undefined, Response>
    | Action<ActionC, Request | undefined, any>
  > => dispatch => {
    const [requestType, successType, errorType] = actions;
    dispatch(createAction(requestType, apiArgs, {}));
    return Promise.resolve(api(apiArgs))
      .then(response => {
        const action = createAction(successType, apiArgs, response);
        dispatch(action);
        return action;
      })
      .catch(err => {
        const action = createAction(errorType, apiArgs, err);
        Promise.reject(dispatch(action));
      });
  };
}

type Enumerate<Type> = Type[keyof Type];
export type ActionObjectTypes<Type> = Enumerate<
  {
    [Key in keyof Type]: Type[Key] extends (
      args: any
    ) => ThunkAction<any, any, any, infer Actions>
      ? Actions
      : Type[Key] extends (args: any) => Action<any, any, any> // for normal createAction
      ? ReturnType<Type[Key]>
      : never
  }
>;

export type GetReducerState<Type> = {
  [Props in keyof Type]: Type[Props] extends (...args: any[]) => infer Thunk ? Thunk : never
};

export type GetConnectDispatchPropsType<Type> = {
  [Props in keyof Type]: Type[Props] extends (
    args?: infer Request
  ) => ThunkAction<infer Thunk, any, any, any>
    ? (args?: Request) => Thunk
    : Type[Props] extends (args: infer State) => infer Reducer
    ? (args?: State) => Reducer
    : never
};

export const INIT = "INIT";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export type asyncStatusTypes = "INIT" | "LOADING" | "SUCCESS" | "ERROR";
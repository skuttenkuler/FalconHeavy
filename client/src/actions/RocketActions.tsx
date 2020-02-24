import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from 'axios';
//import rocket
import { Rocket, RocketState } from '../reducers/RocketReducer';
//action type
export enum RocketActionTypes {
    GET_ALL = 'GET_ALL'
}
//GET_ALL action
export interface GetAllRockets {
    type: RocketActionTypes.GET_ALL;
    rockets: Rocket[];
}
//combine actiontype into one ref
export type RocketActions = GetAllRockets;
//GET ALL ACTION of promise to return type, state, param type and action type
export const getAllRockets: ActionCreator<
//type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
    ThunkAction<Promise<any>, RocketState, null, GetAllRockets >> = () => {
        return async( dispatch: Dispatch) => {
            try {
                const response = await axios.get('/api/rockets');
                dispatch({
                    type:RocketActionTypes.GET_ALL,
                    rockets: response.data.results,
                });
            } catch (error){
                console.log(error);
            }
        };
    };





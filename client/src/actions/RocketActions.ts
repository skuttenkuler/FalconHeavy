import {ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
//import Rocket type
import {Rocket, RocketState} from '../reducers/RocketReducer';

//create the action consts
export enum RocketActionTypes {
    GET_ALL = 'GET_ALL'
}
//GET ALL ACTION interface
export interface GetAllRockets {
    type: RocketActionTypes.GET_ALL;
    rockets: Rocket[];
}
//Combine actiontypes into one reference
export type RocketActions = GetAllRockets;

//GET ALL ACTION of promise to return type, state, param type and action type
export const getAllRockets: ActionCreator<
//type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
    ThunkAction<Promise<any>, RocketState, null, GetAllRockets >> = () => {
        return async( dispatch: Dispatch) => {
            try {
                const response = await axios.get('/rockets');
                dispatch({
                    rockets: response.data.results,
                    type:RocketActionTypes.GET_ALL,
                });
            } catch (error){
                console.log(error);
            }
        };
    };
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import axios from 'axios';
//import rocket
import { Rocket } from '../reducers/RocketReducer';
//action type
export enum RocketActionTypes {
    GET_ALL = 'GET_ALL',
    GET_F1 = 'GET_F1',
    GET_F9 = 'GET_F9',
    GET_FH = 'GET_FH',
    GET_BFH = 'GET_BFH'
}
//GET_ALL action
export interface GetAllRockets {
    type: RocketActionTypes.GET_ALL;
    rockets: Rocket[];
}
export interface GetFalcon1 {
    type: RocketActionTypes.GET_F1;
    rockets: Rocket[];
}
export interface GetFalcon9 {
    type: RocketActionTypes.GET_F9;
    rockets: Rocket[];
}
export interface GetFalconHeavy {
    type: RocketActionTypes.GET_FH;
    rockets: Rocket[];
}
export interface GetBigFalconHeavy {
    type: RocketActionTypes.GET_BFH;
    rockets: Rocket[];
}
//combine actiontype into one ref
export type RocketActions = GetAllRockets | GetFalcon1 | GetFalcon9 | GetFalconHeavy | GetBigFalconHeavy;
//GET ALL ACTION of promise to return type, state, param type and action type


export const getAllRockets: ActionCreator<
//type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
    ThunkAction<Promise<any>, Rocket, null, GetAllRockets >> = () => {
        console.log("get_all")
        return async( dispatch: Dispatch) => {
            try {
                const response = await axios.get('/api/rockets');
                dispatch({
                    type:RocketActionTypes.GET_ALL,
                    rockets: response,
                });
            } catch (error){
                console.log(error);
            }
        };
    };
    export const getFalcon1: ActionCreator<
    //type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
        ThunkAction<Promise<any>, Rocket, null, GetFalcon1 >> = () => {
            console.log("get_f1")
            return async( dispatch: Dispatch) => {
                try {
                    const response = await axios.get('/api/rockets/5e502b5dcebb7d241b868ca4');
                     return dispatch({ type:RocketActionTypes.GET_F1, rocket: response});
                } catch (error){
                    console.log(error);
                }
                
            };
        };
    export const getFalcon9: ActionCreator<
    //type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
        ThunkAction<Promise<any>, Rocket, null, GetFalcon9 >> = () => {
            console.log("get_f9")
            return async( dispatch: Dispatch) => {
                try {
                    const response = await axios.get('/api/rockets/5e502b5dcebb7d241b868ca3');
                        return dispatch({ type:RocketActionTypes.GET_F9, rocket: response});
                } catch (error){
                    console.log(error);
                }
                
            };
        };
    export const getFalconHeavy: ActionCreator<
    //type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
        ThunkAction<Promise<any>, Rocket, null, GetFalconHeavy >> = () => {
            console.log("get_fh")
            return async( dispatch: Dispatch) => {
                try {
                    const response = await axios.get('/api/rockets/5e502b5dcebb7d241b868ca5');
                        return dispatch({ type:RocketActionTypes.GET_F9, rocket: response});
                } catch (error){
                    console.log(error);
                }
                
            };
        };
    export const getBigFalconHeavy: ActionCreator<
    //type ThunkAction<R, S, E, A extends Action<any>> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R
        ThunkAction<Promise<any>, Rocket, null, GetBigFalconHeavy >> = () => {
            console.log("get_bfr")
            return async( dispatch: Dispatch) => {
                try {
                    const response = await axios.get('/api/rockets/5e502b5dcebb7d241b868ca6');
                        return dispatch({ type:RocketActionTypes.GET_FH, rocket: response});
                } catch (error){
                    console.log(error);
                }
                
            };
        };





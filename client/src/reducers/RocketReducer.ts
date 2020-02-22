import { Reducer } from 'redux';
import {RocketActions, RocketActionTypes} from '../actions/RocketActions'

    //define Rocket Type
 export interface Rocket{
    first_flight: string,
    height: number,
    diameter: number,
    mass: number,
    first_stage: {
        reuseable: boolean,
        engines: number,
        fuel_amount_tons: number,
        burn_time_sec: number,
        thrust_sea_level_kn: number,
        thrust_vaccum_kn: number,
    }
    second_stage: {
        engines: number,
        fuel_amount_tons: number,
        burn_time_sec: number,
        thrust_kn: number,
        
    }
    landing_legs: number,
    description: string
    }
    //define Rocket state
    export interface RocketState {
        readonly rocket: Rocket[];
    };
    //initial state
    const INITIAL_ROCKET_STATE: RocketState ={
        rocket: [],
    };

    export const RocketReducer: Reducer<RocketState, RocketActions> = (
        state = INITIAL_ROCKET_STATE,
        action) => {
            switch (action.type) {
                case RocketActionTypes.GET_ALL: {
                    return {
                        ...state,
                        rocket: action.rockets,
                    };
                }
                defualt:
                    return state;
            }
        }
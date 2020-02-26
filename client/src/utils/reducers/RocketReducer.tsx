
import {RocketActions, RocketActionTypes } from '../actions/RocketActions';


//define Rocket
export const RocketState: Rocket = {
    rocket:[],
    first_flight: "string",
    height: 123,
    diameter: 123,
    mass: 123,
    first_stage: {
        reuseable: true,
        engines: 123,
        fuel_amount_tons: 123,
        burn_time_sec: 123,
        thrust_sea_level_kn: 123,
        thrust_vaccum_kn: 123,
    },
    second_stage: {
        engines: 123,
        fuel_amount_tons: 123,
        burn_time_sec: 123,
        thrust_kn: 123,
        
    },
    landing_legs: 123,
    description: "string"
    } 


export interface Rocket{
        rocket: Rocket[],
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


export const RocketReducer = (state: Rocket = RocketState, action: RocketActions) : Rocket => {
        switch (action.type) {
            case RocketActionTypes.GET_F1:{
                return {
                    ...state, rocket: action.rockets,
                };
            }
            default:
                return state;
        }
    }
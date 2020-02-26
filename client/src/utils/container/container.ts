import {SingleRocketsDisplay} from '../../components/Rockets/SingleRocketsDisplay/SingleRocketsDisplay'

import {compose , Dispatch} from 'redux';
import {connect, Provider} from 'react-redux';
import { RocketActions, RocketActionTypes, getFalcon1 } from '../actions/RocketActions'
import { Rocket} from '../reducers/RocketReducer';


// const mapStateToProps = (state: Rocket) => {
//     return {
//         first_flight: state.first_flight,
//         height: state.height,
//         diameter: state.diameter,
//         mass: state.mass,
//         first_stage: {
//             reuseable: state.first_stage.reuseable,
//             engines: state.first_stage.engines,
//             fuel_amount_tons: state.first_stage.engines,
//             burn_time_sec: state.first_stage.engines,
//             thrust_sea_level_kn: state.first_stage.engines,
//             thrust_vaccum_kn: state.first_stage.engines,
//         },
//         second_stage: {
//             engines: state.,
//             fuel_amount_tons: state.,
//             burn_time_sec: state.,
//             thrust_kn: state.,
            
//         },
//         landing_legs: state.,
//         description: "string"
//     } 
//     };
//   };


export const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    console.log("37:")
    console.log(dispatch)
    return {
        GetFal1: () => {
            console.log("hey")
            dispatch(RocketActionTypes.GET_F1)
        }
    };
}


export const Map = compose(connect(mapDispatchToProps))(SingleRocketsDisplay);
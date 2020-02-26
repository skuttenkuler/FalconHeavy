import * as React from 'react';
import { getFalcon1, GetFalcon1 } from '../../../utils/actions/RocketActions';
import {RocketState} from '../../../utils/reducers/RocketReducer';
import './style.css'
export interface Props {
//     rocket: {
//         engines: {
//         number: number,
//         type: string,
//         propellant_1: string,
//         propellant_2:string,
//         thrust_sea_level: {
//             kN: number,
//             Ibf: number
//         }
//         thrust_vaccum: {
//             kN: number,
//             Ibf: number
//         }
//     }
//     landing_legs: {
//         number: number,
//         material: string
//     }
//     first_stage: {
//         reuseable: boolean,
//         engines: number,
//         fuel_amount_tons: number,
//         burn_time_sec: number,
//         thrust_sea_level: {
//             kN: number,
//             Ibf: number
//         }
//         thrust_vaccum: {
//             kN: number,
//             Ibf: number
//         }
//     }
//     second_stage: {
//         engines: number,
//         fuel_amount_tons: number,
//         burn_time_sec: number,
//         thrust: {
//             kN: number,
//             Ibf: number
//         }
        
//     }
//     description: string;
// }
click: any;

}; 


export const SingleRocketsDisplay : React.FC<Props> = ({ click }) => {
//    console.log(state)
//     React.useEffect(() =>{
//         Axios
//         .get('./api/rockets/falcon9')
//         .then((data:any) => {
//             dispatch(data, 'GET_F9')
//         })
//         .catch(err => console.log(err)
//         )
//     });
        return(
        <div className="rockets-background">
            <div className="rocket-stats">
                <h1>Rocket Name</h1>
                <ul className="engines">
                    <h4>Engines</h4>
                    <li>Number: {}</li>
                    <li>Engine Type: {}</li>
                    <li>Propellant 1: {}</li>
                    <li>Propellant 2: {}</li>
                    <li>Landing Legs: 2</li>
                        <ul className="engine-thrust-vaccum">
                            <p>Thrust at Sea Level:</p>
                            <li>Kilonewtons: 420 </li>
                            <li>Pound-Force: 94000</li>
                        </ul>
                        <ul className="engine-thrust-vaccum">
                            <p>Thrust in Vaccum:</p>
                            <li>Kilonewtons: 480 </li>
                            <li>Pound-Force: 110000</li>
                        </ul>
                        <ul className="first-stage">
                            <p>First Stage:</p>
                                <li> Reusable: False</li>
                                <li> Engines: 1 </li>
                                <li> Fuel Amount: 44.3 tons</li>
                                <li> Burn Time: 169 seconds</li>
                                <ul className="first-stage-engine-thrust">
                                    <p>Thrust at Sea Level:</p>
                                        <li>Kilonewtons: 480 </li>
                                        <li>Pound-Force: 110000</li>
                                    <p>Thrust in Vaccum:</p>
                                        <li>Kilonewtons: 480 </li>
                                        <li>Pound-Force: 110000</li>
                                </ul>
                        </ul>
                        <ul className="second-stage">
                            <p>Second Stage:</p>
                                <li> Engines: 1 </li>
                                <li> Fuel Amount: 44.3 tons</li>
                                <li> Burn Time: 169 seconds</li>
                                <ul className="second-stage-engine-thrust">
                                    <p>Thrust:</p>
                                        <li>Kilonewtons: 31 </li>
                                        <li>Pound-Force: 7000</li>
                                </ul>
                        </ul>
                </ul>
            </div>
            <div className="rockets">
                <ul className="rocket-buttons">
                    <button onClick={ click} type="button">Falcon One</button>
                    <button type="button">Falcon 9</button>
                    <button type="button">Falcon Heavy</button>
                    <button type="button">Big Falcon Heavy</button>
                </ul>
            </div>
        </div>
        );
    }



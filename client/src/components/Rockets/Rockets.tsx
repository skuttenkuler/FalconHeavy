import * as React from 'react'
import './Rockets.css'
import * as API from '../../utils/api-routes'

//import buttons
import {FalconOneBtn} from './FalconOne/F1'
import { Falcon9Btn } from './F9/F9'
import { FalconHeavyBtn } from './FH/FH';
import { BigFalconHeavyBtn } from './BFalconheavy/BFH';
import { Rocket } from '../../reducers/RocketReducer'


//stats


//  AllRocketProps{
//     rocket:{
//     active: boolean,
//     boosters: number,
//     cost_per_launch: number,
//     success_rate: number,
//     payload_weights: number,
//     engine: {
//         number:number,
//         thrust_sea_level: number,
//         thrust_vaccum: number,
//         thrust_to_weight: number,
//     }
// }
// }



     
const Rockets : React.SFC<{}> = () => {
        return(
            <>
            <div className="background">
                <div className="rockets">
                    <ul>
                        <FalconOneBtn/>
                        <Falcon9Btn/>
                        <FalconHeavyBtn/>
                        <BigFalconHeavyBtn/>
                    </ul>
                </div>
            </div>
            </>
        )
    }

export default Rockets
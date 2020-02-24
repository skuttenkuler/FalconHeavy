
import * as React from 'react'

import {AllRocketsDisplay} from './AllRocketsDisplay/AllRockets'
import SingleRocketsDisplay from './SingleRocketsDisplay/SingleRocketsDisplay'

// import './Rockets.css'
// import FalconList from './FalconRocketList/FalconList'
// import * as bodyParser from 'body-parser';
// //stats

const Rockets : React.FC<{}>  = () => {
    
        return(
            <div>
            <AllRocketsDisplay/>
            <SingleRocketsDisplay/>
            </div>
           
        )
    }



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


export default Rockets
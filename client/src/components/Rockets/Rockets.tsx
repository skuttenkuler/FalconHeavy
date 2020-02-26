import * as React from 'react'
import { Dispatch } from 'react';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux'
import {AllRocketsDisplay} from './AllRocketsDisplay/AllRockets'
import SingleRocketsDisplay from './SingleRocketsDisplay/SingleRocketsDisplay'
import store from '../../store/store'
import * as Actions from '../../actions/RocketActions';
// import './Rockets.css'
// import FalconList from './FalconRocketList/FalconList'
// import * as bodyParser from 'body-parser';
// //stats

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onClick: () => dispatch(Actions.getFalcon1)
    }
}


var Rockets : React.FC<{}>  = () => {
    
        return(

            <Provider store={store}>
                <AllRocketsDisplay/>
                <SingleRocketsDisplay/>
            </Provider>
            
           

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


export default Rockets = compose(connect(mapDispatchToProps))(Rockets)
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


export default Rockets
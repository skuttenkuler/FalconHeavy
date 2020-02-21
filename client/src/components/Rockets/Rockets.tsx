import * as React from 'react'
import './Rockets.css'
import FalconList from './FalconRocketList/FalconList'
//import { Launches } from '../../../../routes/api-route';
import * as bodyParser from 'body-parser';
import * as API from '../../utils/api-routes'
//stats

// interface State = {

// }
class Rockets{
    
    
    // public componentDidMount(){
    //     API.default.getLaunchData.then(
            
    //     )
    // }
    //public launchRoutes: Launches = new Launches();
    
    render(){

        return(
            <div className="background">
                <div className="rockets">
                    <FalconList/>
                </div>
            </div>
        )
    }
}

export default Rockets
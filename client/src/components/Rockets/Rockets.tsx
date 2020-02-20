import * as React from 'react'
import './Rockets.css'
import FalconList from './FalconRocketList/FalconList'
import { Launches } from '../../../../routes/api-route';
import * as bodyParser from 'body-parser';
//stats

class Rockets{
    public launchRoutes: Launches = new Launches();
    constructor(){
        this.launchRoutes.routes(this.app)
    }
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
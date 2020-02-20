import * as React from 'react'
import './Rockets.css'
import FalconList from './FalconRocketList/FalconList'

export default function Rockets(){
    return(
        <div className="background">
            <div className="rockets">
                <FalconList/>
            </div>
        </div>
    )
}
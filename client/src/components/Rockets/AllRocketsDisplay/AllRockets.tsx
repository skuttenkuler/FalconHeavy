import React from 'react'
import CostChart from '../../Charts/CostChart/CostChart'
import SuccessRateChart from '../../Charts/SuccessRateChart/SuccessRateChart'
import TimeLineChart from '../../Charts/TimelineChart/TimelineChart'
import HeightChart from '../../Charts/HeightChart/HeightChart'
import DiameterChart from '../../Charts/DiameterChart/DiameterChart'
import MassChart from '../../Charts/MassChart/MassChart'
import './AllRockets.css'
export const AllRocketsDisplay = (props: any) => {
        return (
                <div>
                    <ul className="rocket-names">
                        <li>Falcon 1 |</li>
                        <li> Falcon 9 |</li>
                        <li> Falcon Heavy |</li>
                        <li> Big Falcon Heavy </li>
                    </ul>
                    <div className="row charts1">
                        <ul>
                            <li><CostChart/></li>
                            <li><SuccessRateChart/></li>
                            <li><TimeLineChart/></li>
                            <li><HeightChart/></li>
                        </ul>   
                    </div>
                    <div className="row charts2">
                        <ul>
                            <li><DiameterChart/></li>
                            <li><MassChart/></li>
                        </ul>
                    </div>
                </div>
        );
    };

import * as React from 'react';
import { FalconOneBtn } from '../F1/F1'
import { Falcon9Btn } from '../F9/F9'
import { FalconHeavyBtn } from '../FH/FH'
import { BigFalconHeavyBtn } from '../BFalconheavy/BFH'

const SingleRocketsDisplay : React.FC<{}> = () => {
        return(
        <div className="rockets-background">
            <div className="rocket-stats">
                <h1>Rocket Name</h1>
                <ul className="engines">
                    <h4>Engines</h4>
                    <li>Number: 1</li>
                    <li>Engine Type: Merlin</li>
                    <li>Propellant 1: Liquid Oxygen</li>
                    <li>Propellant 2: RP-1 kerosene</li>
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
                <ul>
                    <FalconOneBtn/>
                    <Falcon9Btn/>
                    <FalconHeavyBtn/>
                    <BigFalconHeavyBtn/>
                </ul>
            </div>
        </div>
        );
    }

export default SingleRocketsDisplay;


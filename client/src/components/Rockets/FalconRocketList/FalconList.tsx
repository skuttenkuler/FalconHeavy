import * as React from 'react';
import { FalconOneBtn } from './FalconOne/F1'
import { Falcon9Btn } from './F9/F9'
import { FalconHeavyBtn } from './FH/FH';
import { BigFalconHeavyBtn } from './BFalconheavy/BFH';

const Falconlist = () => {
        return(
            <ul className="rocket_buttons">
                <FalconOneBtn/>
                <Falcon9Btn/>
                <FalconHeavyBtn/>
                <BigFalconHeavyBtn/>
            </ul>
        )
}

export default Falconlist;
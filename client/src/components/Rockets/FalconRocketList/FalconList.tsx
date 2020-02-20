import * as React from 'react';
import { F9v1Btn } from './F9v1/F9v1'
import { F9v1_1Btn } from './F9v1_1/F9v1_1'
import { F9B5Btn } from './F9B5/F9B5'
import { FHBtn } from './FH/FH'
import { FHB5Btn } from './FHB5/FHB5'


const Falconlist = () => {
        return(
            <ul className="rocket_buttons">
                <F9v1Btn/>
                <F9v1_1Btn/>
                <F9B5Btn/>
                <FHBtn/>
                <FHB5Btn/>
            </ul>
        )
}

export default Falconlist;
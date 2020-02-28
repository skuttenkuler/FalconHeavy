import * as React from 'react'
import {Provider} from 'react-redux'
//import {AllRocketsDisplay} from './AllRocketsDisplay/AllRockets'
import SingleRocketsDisplay from './SingleRocketsDisplay/SingleRocketsDisplay'
import store from '../../redux/store/store'




export const Rockets : React.FC = () => {
        return(

            <Provider store={store}>
                {/* <AllRocketsDisplay/> */}
                <SingleRocketsDisplay/>
            </Provider>
            
           

        )
    }







import * as React from 'react'
import {Provider} from 'react-redux'
import {AllRocketsDisplay} from './AllRocketsDisplay/AllRockets'
import {SingleRocketsDisplay} from './SingleRocketsDisplay/SingleRocketsDisplay'
import store from '../../utils/store/store'
import * as container from "../../utils/container/container"



export const Rockets : React.FC = () => {
    let getRocket = container.mapDispatchToProps
   
        return(

            <Provider store={store}>
                <AllRocketsDisplay/>
                <SingleRocketsDisplay click={getRocket} />
            </Provider>
            
           

        )
    }







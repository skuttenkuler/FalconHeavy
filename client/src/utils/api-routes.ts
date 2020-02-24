import axios from 'axios';



interface LaunchProps{
    response: {}
}
interface RocketProps{
    response: {}
}

export default {
    
    getAllLaunches : () => {
        return(
            axios.get<LaunchProps>('/launches')
        )
    },
    getAllRockets : () => {
        return(
            axios.get<RocketProps>('/rockets')
        )
    },
    getFalconOne : () => {
        return(
            axios.get<RocketProps>('/rocket/falcon1')
            )
        
    },
    

}

//get list of api calls and make them happen.

//stashing axois calls

//return axios calls set up in backend api
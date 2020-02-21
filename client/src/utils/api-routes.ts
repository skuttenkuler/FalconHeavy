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
            axios.get<LaunchProps>('/launches').then(
                (response) => {
                    const {data} = response
                    return data;
                })
                
        )
    },
    getAllRockets : () => {
        return(
            axios.get<RocketProps>('/boosters').then(
                (response) => {
                    const {data} = response
                    return data;
                })
                
        )
    },
    getRocket : () => {
        return(
            axios.get<RocketProps>('/rockets/falon1').then(
                (response) => {
                    const {data} = response
                    return data;
                })
                
        )
    }
    

}

//get list of api calls and make them happen.

//stashing axois calls

//return axios calls set up in backend api
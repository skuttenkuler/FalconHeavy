import axios from 'axios';



interface LaunchProps{
    response: {}
}
interface BoosterProps{
    response: {}
}

export default {
    
    getLaunchData : () => {
        return(
            axios.get<LaunchProps>('/launches').then(
                (response) => {
                    const {data} = response
                    return data;
                })
                
        )
    },
    getBoosterData : () => {
        return(
            axios.get<BoosterProps>('/boosters').then(
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
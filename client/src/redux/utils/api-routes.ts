import { RocketResponse } from "../models/Rocket";

import axios from 'axios';



export default  {
    getRocket(rocket: string) {
        // switch(rocket) {
        //     case "Falcon 1": {
            console.log(rocket)
                return axios.get('http://localhost:3001/api/rockets/5e502b5dcebb7d241b868ca4').then<RocketResponse>(
                res => res.data
                );
               
        //  }
        //     case "Falcon 9": {
        //         return axios.get('http://localhost:3001/api/rockets/5e502b5dcebb7d241b868ca3').then<RocketResponse>(
        //         res => res.data
        //         );
                
        //     }
        //     case "Falcon Heavy": {
        //         return axios.get('http://localhost:3001/api/rockets/5e502b5dcebb7d241b868ca5').then<RocketResponse>(
        //         res => res.data
        //         );
                
        //     }
        //     case "Big Falcon Heavy": {
        //         return axios.get('http://localhost:3001/api/rockets/5e502b5dcebb7d241b868ca6').then<RocketResponse>(
        //         res => res.data
        //         );
                
        //     }
       
        // }
       
        }
    }


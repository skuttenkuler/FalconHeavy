import { RocketResponse } from "../models/Rocket";

import axios from 'axios';



export default  {
    getRocket(rocket: string) {
      
                return axios.get(`https://api.spacexdata.com/v3/rockets/${rocket}`).then<RocketResponse>(
                res => res.data
                );
   
        }
    }


import { RocketResponse } from "../models/Rocket";

import axios from 'axios';



export default  {
    getRocket(rocket: string) {
      
                return axios.get(`http://localhost:3001/api/rockets/${rocket}`).then<RocketResponse>(
                res => res.data
                );
   
        }
    }


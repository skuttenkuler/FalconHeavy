import { RocketResponse } from "../models/Rocket";

import axios from 'axios';



export default  {
    getRocket(rocket: string) {
      
<<<<<<< HEAD
                return axios.get(`https://api.spacexdata.com/v3/rockets/${rocket}`).then<RocketResponse>(
=======
                return axios.get(`http://localhost:3001/api/rockets/${rocket}`).then<RocketResponse>(
>>>>>>> c6680544199768b8eed04888e8241db1a8bfb5ec
                res => res.data
                );
   
        }
    }


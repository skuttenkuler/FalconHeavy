import { RocketResponse } from "../models/Rocket";

import axios from 'axios';


export default {
    getRocket() {
       return axios.get('http://localhost:3001/api/rockets/5e502b5dcebb7d241b868ca4').then<RocketResponse>(
            res => res.data
        )
    }
}

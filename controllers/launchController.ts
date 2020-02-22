import { Request, Response } from 'express';

import * as db from '../models';



//GET ALL LAUNCHES
export let allLaunches = (req: Request, res:Response) => {
    let launches = db.Launch.find((error: any, launches: any) => {
        if(error){
            res.send(error)
        } else{
            res.send(launches);
        }
    })
}
//Get launches of specific Rockets
export let getLaunchesByRocket = (req: Request, res:Response) => {
    console.log(req.params.rocket)
    let rocket_launches = db.Launch.find({"rocket.rocket_id": req.params.rocket}, (error: any, rocket_launches: Request['params']) => {
        if(error){
            res.send(error)
        } else{
            res.send(rocket_launches);
        }

    })
   
}


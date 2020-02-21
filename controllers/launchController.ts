import { Request, Response } from 'express';
import { Launch } from '../models'
import * as db from '../models'


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

//ADD NEW LAUNCH
export let addLaunch = (req: Request, res:Response) => {
    let launch = new Launch(req.body);

    launch.save((error: any) =>{
        if(error){
            res.send(error);
        } else{
            res.send(launch)
        }
    })
}
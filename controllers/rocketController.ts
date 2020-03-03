import { Request, Response } from 'express';
import { Rocket } from '../models';
import * as db from '../models'

interface Rocket{
    rocket: {}
}


//GET ALL Rockets
export let allRockets = (req: Request, res:Response) => {
    let rockets = db.Rocket.find((error: any, rockets: any) => {
        if(error){
            res.send(error)
        } else{
            res.send(rockets);
        }
    })
}



//GET Rockets by Id
export let getRocket = (req: Request, res: Response) => {
    console.log(req.params.rocket)
    db.Rocket.find({rocket_name: req.params.rocket}, (error: any, rocket: any) => {
      if(error){
        res.send(error)
    } else{
        res.json(rocket[0]);
    }
    })  
        
};

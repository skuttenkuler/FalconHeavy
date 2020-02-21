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
    let rocket = db.Rocket.findById(req.params.rocket, (err: any, rocket: {_id:Request['params']}) => {
      if (err) {
        res.send(err);
      } else {
        res.send(rocket);
      }
    });
  };

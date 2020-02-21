import { Request, Response } from 'express';
import { Booster } from '../models'


//GET LAUNCHES BY BOOSTER
export const getBooster = (req: Request, res: Response) => {
    Booster.find((error: any, booster: { booster: {} }) => {
        if(error){
            res.send(error)
        } else{
            res.send(booster)
        }
    })
}

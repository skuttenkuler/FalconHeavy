import {Request, Response} from "express";
import { Router } from 'express';
import * as controllers from '../controllers'
import { Booster, Launch } from '../models';



const router = Router();


router.get('/launches', controllers.allLaunches);
router.get('/boosters', controllers.getBooster);
router.put('/launches/:launch', controllers.addLaunch);

module.exports = router;
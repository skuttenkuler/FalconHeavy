import * as express from 'express';
import * as controllers from '../controllers'



const router = express.Router();


router.get('/launches', controllers.allLaunches);
router.get('/rockets', controllers.allRockets)
router.get('/launches/:launch', controllers.getRocketLaunches);
router.get('/rockets/:rocket', controllers.getRocket);

export {router};
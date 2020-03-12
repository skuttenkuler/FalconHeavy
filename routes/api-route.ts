import express from 'express';
import * as controllers from '../controllers'

const router = express.Router();


router.get('/api/launches', controllers.allLaunches);
router.get('/api/rockets', controllers.allRockets)
router.get('/api/launches/:rocket', controllers.getLaunchesByRocket);
router.get('/api/rockets/:rocket', controllers.getRocket);

module.exports = router 
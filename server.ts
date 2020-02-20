import * as express from "express";
import * as bodyParser from 'body-parser';
import * as launchController from './controllers/launchController';


const app = express.default();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json())
app.get("/", (req:any, res: any) =>{
    res.send("HEEEEY");
});

app.get('/launches', launchController.allLaunches);
app.get('boosters/:booster', launchController.getBooster);
app.put('/launches/:launch', launchController.addLaunch);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
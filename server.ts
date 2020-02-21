import * as express from "express";
import * as bodyParser from 'body-parser';

import * as mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

const uri: string = "mongodb://localhost/spaceX"
mongoose.connect(uri, (error:any) => {
    if(error){
        console.log(error.message)
    } else{
        console.log("Connected to database")
    }
})


// db.Launch.create({
//     number: 1,
//     date: "1/24/20",
//     time: "10pm",
//     booster: "test",
//     launchSite: "test",
//     payload: "test",
//     payloadMass: 1,
//     Orbit: "test",
//     missionOutcome: "test",
//     landingOutcome: "test"
//   }).then(data => console.log("1 item created")).catch(error => console.log(error));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else {
    app.use(express.static(__dirname + '/client/public/'))
}



app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
import express = require("express");
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { router } from "./routes/api-route";
const cors = require("cors")

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
app.use(cors())
app.use(router)
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
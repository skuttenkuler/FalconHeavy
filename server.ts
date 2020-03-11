const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require("cors")
const router = require('./routes/api-route.ts')
const app = express();
const PORT = process.env.PORT || 3001;

const uri: string = process.env.MONGODB_URI || "mongodb://localhost/spaceX"
mongoose.connect(uri, (error) => {
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
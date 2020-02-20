const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

//Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static(__dirname + "/client/spacex/public/"))
}

//Define API routes here

//Send every other request to the React app
//Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


//Connect to MongoDB
mongoose.connect("mongodb://localhost/spaceX");

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})
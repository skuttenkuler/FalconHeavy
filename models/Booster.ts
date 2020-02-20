import * as mongoose from 'mongoose';

const uri: string = "mongodb://localhost/spaceX"
mongoose.connect(uri, (error:any) => {
    if(error){
        console.log(error.message)
    } else{
        console.log("Connected to database")
    }
})

export const BoosterSchema = new mongoose.Schema({
    number: {type:Number, required: true},
    date: {type:Date, required:true},
    time: {type:String, required:true},
    booster: {type:String, required:true},
    launchSite: {type:String, required:true},
    payload: {type:String, required:true},
    payloadMass: {type:Number, required:true},
    orbit: {type:String, required:true},
    missionOutcome: {type:String, required:true},
    landingOutcome: {type:String, required:true},
});

const Booster = mongoose.model('Launch', BoosterSchema);
export default Booster;
import * as mongoose from 'mongoose';

const BoosterSchema = new mongoose.Schema({
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
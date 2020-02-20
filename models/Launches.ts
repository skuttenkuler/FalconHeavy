import * as mongoose from 'mongoose';

export interface InterfaceLaunches extends mongoose.Document {
    number: number,
    date: Date,
    time: string,
    booster: string,
    launchSite: string,
    payload: string,
    payloadMass: number,
    Orbit: string,
    missionOutcome: string,
    landingOutcome: string,
}


const LaunchSchema = new mongoose.Schema({
    number: {type:Number, required: true},
    date: {type:Date, required:true},
    time: {type:String, required:true},
    booster: {type:String, required:true},
    launchSite: {type:String, required:true},
    payload: {type:String, required:true},
    payloadMass: {type:Number, required:true},
    Orbit: {type:String, required:true},
    missionOutcome: {type:String, required:true},
    landingOutcome: {type:String, required:true},
});

const Launch = mongoose.model<InterfaceLaunches>('Launch', LaunchSchema);
export default Launch;
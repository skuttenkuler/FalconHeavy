import * as mongoose from 'mongoose';

export interface InterfaceRockets extends mongoose.Document {
    height:number,
    diameter:number,
    totalWidth:number, 
    mass:number, 
    cores:number, 
    boosters:number, 
    stages:number, 
    engines:number, 
    burnTime:number, 
    thrustSea:number, 
    thrustVac:number, 
    payloadLEO:number, 
    payloadGTO:number, 
    payloadMars:number, 
    payloadPluto:number
}
const RocketSchema = new mongoose.Schema({
    height: {type:Number, required:true},
    diameter: {type:Number, required:true},
    totalWidth: {type:Number, required:true},
    mass: {type:String, required:true},
    cores: {type:Number, required:true},
    boosters: {type:Number, required:true},
    stages: {type:Number, required:true},
    engines: {type:Number, required:true},
    burnTime: {type:Number, required:true},
    thrustSea: {type:Number, required:true},
    thrustVac: {type:Number, required:true},
    payloadLEO: {type:Number, required:true},
    payloadGTO: {type:Number, required:true},
    payloadMars: {type:Number, required:true},
    payloadPluto: {type:Number, required:true}
});

const Rocket = mongoose.model<InterfaceRockets>('Rocket', RocketSchema);
export default Rocket;


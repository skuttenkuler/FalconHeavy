"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var uri = "mongodb://localhost/spaceX";
mongoose.connect(uri, function (error) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("Connected to database");
    }
});
exports.LaunchSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    booster: { type: String, required: true },
    launchSite: { type: String, required: true },
    payload: { type: String, required: true },
    payloadMass: { type: Number, required: true },
    Orbit: { type: String, required: true },
    missionOutcome: { type: String, required: true },
    landingOutcome: { type: String, required: true },
});
var Launch = mongoose.model('Launch', exports.LaunchSchema);
exports.default = Launch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF1bmNoZXMuanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJtb2RlbHMvTGF1bmNoZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaURBQXFDO0FBRXJDLElBQU0sR0FBRyxHQUFXLDRCQUE0QixDQUFBO0FBQ2hELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBUztJQUM1QixJQUFHLEtBQUssRUFBQztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzdCO1NBQUs7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7S0FDdkM7QUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVXLFFBQUEsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDckMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ2hDLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztJQUNsQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDckMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ3hDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztJQUNyQyxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDekMsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ25DLGNBQWMsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztJQUM1QyxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7Q0FDL0MsQ0FBQyxDQUFDO0FBRUgsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsb0JBQVksQ0FBQyxDQUFDO0FBQ3RELGtCQUFlLE1BQU0sQ0FBQyJ9
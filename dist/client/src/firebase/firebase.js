"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = __importStar(require("firebase"));
require("firebase/auth");
require("firebase/database");
var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOM,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJ_ID,
    storageBucket: process.env.BUCKET_STORE,
    messagingSenderId: process.env.MESSAGE,
};
firebase.initializeApp(config);
exports.auth = firebase.auth();
exports.db = firebase.database();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VSb290IjoiLi9jbGllbnQvIiwic291cmNlcyI6WyJjbGllbnQvc3JjL2ZpcmViYXNlL2ZpcmViYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlEQUFxQztBQUNyQyx5QkFBdUI7QUFDdkIsNkJBQTJCO0FBRTNCLElBQU0sTUFBTSxHQUFHO0lBQ1gsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUMzQixVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRO0lBQ2hDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7SUFDckMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztJQUM5QixhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO0lBQ3ZDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztDQUN2QyxDQUFDO0FBRUYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVsQixRQUFBLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdkIsUUFBQSxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDIn0=
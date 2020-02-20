"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var bodyParser = __importStar(require("body-parser"));
var launchController = __importStar(require("./controllers/launchController"));
var app = express.default();
var PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.send("HEEEEY");
});
app.get('/launches', launchController.allLaunches);
app.get('boosters/:booster', launchController.getBooster);
app.put('/launches/:launch', launchController.addLaunch);
app.listen(PORT, function () {
    console.log("\uD83C\uDF0E ==> API server now on port " + PORT + "!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii4vY2xpZW50LyIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtDQUFtQztBQUNuQyxzREFBMEM7QUFDMUMsK0VBQW1FO0FBR25FLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQU8sRUFBRSxHQUFRO0lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFELEdBQUcsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUFpQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyxDQUFDIn0=
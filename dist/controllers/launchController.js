"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Launches_1 = __importDefault(require("../models/Launches"));
//GET ALL LAUNCHES
exports.allLaunches = function (req, res) {
    var launches = Launches_1.default.find(function (error, launches) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(launches);
        }
    });
};
//GET LAUNCHES BY BOOSTER
exports.getBooster = function (req, res) {
    Launches_1.default.find(function (error, booster) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(booster);
        }
    });
};
//ADD NEW LAUNCH
exports.addLaunch = function (req, res) {
    var launch = new Launches_1.default(req.body);
    launch.save(function (error) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(launch);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNoQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL2NsaWVudC8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2xhdW5jaENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnRUFBd0M7QUFJeEMsa0JBQWtCO0FBQ1AsUUFBQSxXQUFXLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBWTtJQUNoRCxJQUFJLFFBQVEsR0FBRyxrQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVUsRUFBRSxRQUFhO1FBQ2pELElBQUcsS0FBSyxFQUFDO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNsQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQseUJBQXlCO0FBQ2QsUUFBQSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxrQkFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVUsRUFBRSxPQUE0QjtRQUNqRCxJQUFHLEtBQUssRUFBQztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDbEI7YUFBSztZQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDcEI7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVELGdCQUFnQjtBQUNMLFFBQUEsU0FBUyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQVk7SUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBVTtRQUNuQixJQUFHLEtBQUssRUFBQztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7YUFBSztZQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDbkI7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSJ9
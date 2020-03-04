"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = require("firebase");
const config = {
    apiKey: "AIzaSyDjx83mxXDkS7XdLsm1u2aIGBRhnfa4w2Y",
    authDomain: "spacex-9af2f.firebaseapp.com",
    databaseURL: "https://spacex-9af2f.firebaseio.com",
    projectId: "spacex-9af2f",
    storageBucket: "spacex-9af2f.appspot.com",
    messagingSenderId: "485213885829",
    appId: "1:485213885829:web:0ee0193cc5f350ac4220ec",
    measurementId: "G-BEQJCKZQS6"
};
firebase.initializeApp(config);
exports.auth = firebase.auth();
exports.db = firebase.database();
//# sourceMappingURL=firebase.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("./firebase");
exports.fbCreateUser = function (id, username, email) { return firebase_1.db.ref("users/" + id).set({
    email: email,
    username: username
}); };
exports.getUser = function () { return firebase_1.db.ref("users").once("value"); };
//# sourceMappingURL=db.js.map
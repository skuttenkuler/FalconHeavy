"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("./firebase");
exports.fbCreateUserWithEmailAndPassword = function (email, password) { return firebase_1.auth.createUserWithEmailAndPassword(email, password); };
exports.fbSignInWithEmailAndPassword = function (email, password) { return firebase_1.auth.signInWithEmailAndPassword(email, password); };
exports.SignOut = function () { return firebase_1.auth.signOut(); };
exports.fbPasswordReset = function (email) { return firebase_1.auth.sendPasswordResetEmail(email); };
//# sourceMappingURL=auth.js.map
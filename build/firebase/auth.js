"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
exports.fbCreateUserWithEmailAndPassword = (email, password) => firebase_1.auth.createUserWithEmailAndPassword(email, password);
exports.fbSignInWithEmailAndPassword = (email, password) => firebase_1.auth.signInWithEmailAndPassword(email, password);
exports.SignOut = () => firebase_1.auth.signOut();
exports.fbPasswordReset = (email) => firebase_1.auth.sendPasswordResetEmail(email);
//# sourceMappingURL=auth.js.map
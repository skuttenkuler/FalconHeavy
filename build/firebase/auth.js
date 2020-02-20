"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const firebase_1 = require("./firebase");
exports.fbCreateUserWithEmailAndPassword = (email, password) => firebase_1.auth.createUserWithEmailAndPassword(email, password);
exports.fbSignInWithEmailAndPassword = (email, password) => firebase_1.auth.signInWithEmailAndPassword(email, password);
exports.fbSignOut = () => firebase_1.auth.signOut();
exports.fbPasswordReset = (email) => firebase_1.auth.sendPasswordResetEmail(email);
exports.fbPasswordUpdate = (password) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (firebase_1.auth.currentUser) {
        yield firebase_1.auth.currentUser.updatePassword(password);
    }
    throw Error("No current User");
});
//# sourceMappingURL=auth.js.map
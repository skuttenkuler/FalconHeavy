"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
exports.fbCreateUser = (id, username, email) => firebase_1.db.ref(`users/${id}`).set({
    email,
    username
});
exports.getUser = () => firebase_1.db.ref("users").once("value");
//# sourceMappingURL=db.js.map
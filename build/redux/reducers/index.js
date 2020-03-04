"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("./reducer");
const redux_1 = require("redux");
const reducers = {
    rockets: reducer_1.default
};
exports.default = redux_1.combineReducers(reducers);
//# sourceMappingURL=index.js.map
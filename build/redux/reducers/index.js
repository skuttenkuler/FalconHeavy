"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducer_1 = require("./reducer");
var redux_1 = require("redux");
var reducers = {
    rockets: reducer_1.default
};
exports.default = redux_1.combineReducers(reducers);
//# sourceMappingURL=index.js.map
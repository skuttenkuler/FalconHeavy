"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../reducers/index");
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
exports.default = redux_1.createStore(index_1.default, redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=store.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionCreator_1 = require("../utils/actionCreator");
const types = require("./actionTypes");
const api_routes_1 = require("../utils/api-routes");
const RocketActions = {
    getRocket: actionCreator_1.createAsyncAction([types.GET_ROCKET, types.GET_ROCKET_SUCCESS, types.GET_ROCKET_ERROR,], api_routes_1.default.getRocket)
};
exports.default = RocketActions;
//# sourceMappingURL=Actions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actionCreator_1 = require("../utils/actionCreator");
var initialState = {
    asyncStatus: actionCreator_1.INIT,
    rockets: []
};
function RocketReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case "GET_ROCKET":
            return tslib_1.__assign(tslib_1.__assign({}, state), { asyncStatus: actionCreator_1.LOADING });
        case "GET_ROCKET_SUCCESS":
            return { asyncStatus: actionCreator_1.SUCCESS, rockets: [action.payload.response] };
        default:
            return state;
    }
}
exports.default = RocketReducer;
//# sourceMappingURL=reducer.js.map
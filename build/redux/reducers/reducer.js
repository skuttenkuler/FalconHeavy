"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionCreator_1 = require("../utils/actionCreator");
const initialState = {
    asyncStatus: actionCreator_1.INIT,
    rockets: []
};
function RocketReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ROCKET":
            return Object.assign(Object.assign({}, state), { asyncStatus: actionCreator_1.LOADING });
        case "GET_ROCKET_SUCCESS":
            return { asyncStatus: actionCreator_1.SUCCESS, rockets: [action.payload.response] };
        default:
            return state;
    }
}
exports.default = RocketReducer;
//# sourceMappingURL=reducer.js.map
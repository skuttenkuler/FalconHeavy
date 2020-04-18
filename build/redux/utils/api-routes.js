"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = {
    getRocket(rocket) {
        return axios_1.default.get(`https://api.spacexdata.com/v3/rockets/${rocket}`).then(res => res.data);
    }
};
//# sourceMappingURL=api-routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = {
    getRocket(rocket) {
        return axios_1.default.get(`http://localhost:3001/api/rockets/${rocket}`).then(res => res.data);
    }
};
//# sourceMappingURL=api-routes.js.map
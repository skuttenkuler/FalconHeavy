"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.default = {
    getRocket: function (rocket) {
        return axios_1.default.get("https://api.spacexdata.com/v3/rockets/" + rocket).then(function (res) { return res.data; });
    }
};
//# sourceMappingURL=api-routes.js.map
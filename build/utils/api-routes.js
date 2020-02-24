"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = {
    getLaunchData: () => {
        return (axios_1.default.get('/launches').then((response) => {
            const { data } = response;
            return data;
        }));
    },
    getBoosterData: () => {
        return (axios_1.default.get('/boosters').then((response) => {
            const { data } = response;
            return data;
        }));
    }
};
//# sourceMappingURL=api-routes.js.map
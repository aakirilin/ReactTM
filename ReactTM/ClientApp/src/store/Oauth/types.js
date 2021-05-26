"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetUserDescriptionCreator = exports.SetTokenCreator = void 0;
var actionTypes_1 = require("./actionTypes");
var SetTokenCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_TOKEN,
        newValue: newValue
    };
};
exports.SetTokenCreator = SetTokenCreator;
var SetUserDescriptionCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_DESCRIPTION,
        newValue: newValue
    };
};
exports.SetUserDescriptionCreator = SetUserDescriptionCreator;
//# sourceMappingURL=types.js.map
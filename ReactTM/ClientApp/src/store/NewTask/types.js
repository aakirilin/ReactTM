"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropExecutorsCreator = exports.SetDescriptionCreator = exports.SetTitleCreator = exports.SetDethlineCreator = void 0;
var actionTypes_1 = require("./actionTypes");
var SetDethlineCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_DETHLINE,
        newValue: newValue
    };
};
exports.SetDethlineCreator = SetDethlineCreator;
var SetTitleCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_TITLE,
        newValue: newValue
    };
};
exports.SetTitleCreator = SetTitleCreator;
var SetDescriptionCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_DESCRIPTION,
        newValue: newValue
    };
};
exports.SetDescriptionCreator = SetDescriptionCreator;
var DropExecutorsCreator = function (userId) {
    return {
        type: actionTypes_1.DROP_EXECUTORS,
        userId: userId
    };
};
exports.DropExecutorsCreator = DropExecutorsCreator;
//# sourceMappingURL=types.js.map
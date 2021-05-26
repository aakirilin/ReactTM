"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthReduser = void 0;
var actionTypes_1 = require("./actionTypes");
var initialState = {
    token: undefined,
    userDescription: undefined
};
var SetTokenAction = function (state, action) {
    return __assign(__assign({}, state), { token: action.newValue });
};
var SetDescriptionAction = function (state, action) {
    return __assign(__assign({}, state), { userDescription: action.newValue });
};
var OauthReduser = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.SET_TOKEN: return SetTokenAction(state, action);
        case actionTypes_1.SET_DESCRIPTION: return SetDescriptionAction(state, action);
        default:
            return state;
    }
};
exports.OauthReduser = OauthReduser;
//# sourceMappingURL=reducer.js.map
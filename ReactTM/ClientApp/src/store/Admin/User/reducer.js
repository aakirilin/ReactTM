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
exports.AdminUserReduser = void 0;
var actionTypes_1 = require("./actionTypes");
var models_1 = require("../../../models");
var initialState = {
    user: models_1.NewUser(),
    wasLoad: false
};
var SetUserAction = function (state, action) {
    return __assign(__assign({}, state), { user: action.newValue, wasLoad: true });
};
var ReloadUserAction = function (state, action) {
    return __assign(__assign({}, state), { wasLoad: false });
};
var SetLoginAction = function (state, action) {
    return __assign(__assign({}, state), { user: __assign(__assign({}, state.user), { login: action.newValue }) });
};
var SetNameAction = function (state, action) {
    return __assign(__assign({}, state), { user: __assign(__assign({}, state.user), { name: action.newValue }) });
};
var SetPasswordAction = function (state, action) {
    return __assign(__assign({}, state), { user: __assign(__assign({}, state.user), { password: action.newValue }) });
};
var SetRoleAction = function (state, action) {
    return __assign(__assign({}, state), { user: __assign(__assign({}, state.user), { role: action.newValue }) });
};
var AdminUserReduser = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.SET_USER: return SetUserAction(state, action);
        case actionTypes_1.RELOAD_USER: return ReloadUserAction(state, action);
        case actionTypes_1.SET_LOGIN: return SetLoginAction(state, action);
        case actionTypes_1.SET_NAME: return SetNameAction(state, action);
        case actionTypes_1.SET_PASSWORD: return SetPasswordAction(state, action);
        case actionTypes_1.SET_ROLE: return SetRoleAction(state, action);
        default:
            return state;
    }
};
exports.AdminUserReduser = AdminUserReduser;
//# sourceMappingURL=reducer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadUserCreator = exports.SetRoleCreator = exports.SetPasswordCreator = exports.SetNameCreator = exports.SetLoginCreator = exports.NewUserCreator = exports.SetUserCreator = void 0;
var models_1 = require("../../../models");
var actionTypes_1 = require("./actionTypes");
var adminApi_1 = require("../../../api/adminApi");
var SetUserCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_USER,
        newValue: newValue
    };
};
exports.SetUserCreator = SetUserCreator;
var NewUserCreator = function () {
    return {
        type: actionTypes_1.RELOAD_USER
    };
};
exports.NewUserCreator = NewUserCreator;
var SetLoginCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_LOGIN,
        newValue: newValue
    };
};
exports.SetLoginCreator = SetLoginCreator;
var SetNameCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_NAME,
        newValue: newValue
    };
};
exports.SetNameCreator = SetNameCreator;
var SetPasswordCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_PASSWORD,
        newValue: newValue
    };
};
exports.SetPasswordCreator = SetPasswordCreator;
var SetRoleCreator = function (newValue) {
    return {
        type: actionTypes_1.SET_ROLE,
        newValue: newValue
    };
};
exports.SetRoleCreator = SetRoleCreator;
var LoadUserCreator = function (userId, wasLoad, setWasLoad) { return function (dispatch, getState) {
    if (!wasLoad) {
        if (userId === 'new') {
            dispatch(exports.SetUserCreator(models_1.NewUser()));
        }
        else {
            adminApi_1.default.user.get(userId)
                .then(function (user) { dispatch(exports.SetUserCreator(user)); });
        }
        setWasLoad(true);
    }
}; };
exports.LoadUserCreator = LoadUserCreator;
//# sourceMappingURL=types.js.map
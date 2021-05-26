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
exports.NewTaskReduser = void 0;
var actionTypes_1 = require("./actionTypes");
var initialState = {
    task: {
        autorId: '',
        executors: new Array(),
        title: 'нования задача',
        deathline: new Date(),
        description: '',
        createDate: new Date(),
        notes: new Array(),
    }
};
var SetDethlineAction = function (state, action) {
    return __assign(__assign({}, state), { task: __assign(__assign({}, state.task), { deathline: action.newValue }) });
};
var SetTitleAction = function (state, action) {
    return __assign(__assign({}, state), { task: __assign(__assign({}, state.task), { title: action.newValue }) });
};
var SetDescriptionAction = function (state, action) {
    return __assign(__assign({}, state), { task: __assign(__assign({}, state.task), { description: action.newValue }) });
};
var DropExecutorsAction = function (state, action) {
    return __assign(__assign({}, state), { task: __assign(__assign({}, state.task), { executors: state.task.executors.filter(function (e) { return e !== action.userId; }) }) });
};
var NewTaskReduser = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes_1.SET_DETHLINE: return SetDethlineAction(state, action);
        case actionTypes_1.SET_TITLE: return SetTitleAction(state, action);
        case actionTypes_1.SET_DESCRIPTION: return SetDescriptionAction(state, action);
        case actionTypes_1.DROP_EXECUTORS: return DropExecutorsAction(state, action);
        default:
            return state;
    }
};
exports.NewTaskReduser = NewTaskReduser;
//# sourceMappingURL=reducer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDescription = void 0;
var React = require("react");
var react_1 = require("react");
var apiFunction_1 = require("../../../api/apiFunction");
var UserDescription = function (props) {
    var _a = react_1.useState({}), description = _a[0], setDescription = _a[1];
    var _b = react_1.useState(false), wasLoad = _b[0], setWasLoad = _b[1];
    if (!wasLoad) {
        apiFunction_1.UserDescription(props.userId)
            .then(function (d) { return setDescription(d); });
    }
    return (React.createElement(react_1.Fragment, null,
        React.createElement("div", null, description.name)));
};
exports.UserDescription = UserDescription;
//# sourceMappingURL=UserDescription.js.map
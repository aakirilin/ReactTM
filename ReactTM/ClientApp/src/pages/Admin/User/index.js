"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var User_1 = require("../../../components/pages/Admin/User");
var UserPage = function () {
    var _a = react_1.useState({
        id: '',
        name: '',
        login: '',
        password: '',
        role: ''
    }), user = _a[0], setUser = _a[1];
    return (React.createElement(react_1.Fragment, null,
        React.createElement(User_1.default, { user: user })));
};
exports.default = UserPage;
//# sourceMappingURL=index.js.map
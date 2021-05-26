"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var Users_1 = require("../../../components/pages/Admin/Users");
var adminApi_1 = require("../../../api/adminApi");
var Users = function () {
    var _a = react_1.useState(new Array()), users = _a[0], serUsers = _a[1];
    var _b = react_1.useState(false), wasLoad = _b[0], setWasLoad = _b[1];
    if (!wasLoad) {
        adminApi_1.default.getAllUsers(0, 10)
            .then(function (u) {
            setWasLoad(true);
            serUsers(u.items);
        })
            .catch();
    }
    console.log('/admin/users');
    return (React.createElement(react_1.Fragment, null,
        "awdawdawd",
        React.createElement(react_router_dom_1.Link, { to: '/admin/user' }, "\u041D\u043E\u0432\u044B\u0439"),
        React.createElement(Users_1.default, { users: users })));
};
exports.default = Users;
//# sourceMappingURL=index.js.map
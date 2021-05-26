"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
function renderUser(user, index) {
    return (React.createElement("tr", { key: index.toString() },
        React.createElement("td", null, user.login),
        React.createElement("td", null, user.name),
        React.createElement("td", null, user.role),
        React.createElement("td", null,
            React.createElement(react_router_dom_1.Link, { to: "/admin/user/" + user.id }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C")),
        React.createElement("td", null,
            React.createElement("button", null, "\u0423\u0434\u043B\u0438\u0442\u044C"))));
}
var Users = function (props) {
    console.log(props.users);
    var users = props.users ? props.users.map(renderUser) : new Array();
    return (React.createElement(react_1.Fragment, null,
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("th", null,
                    React.createElement("td", null, "\u041B\u043E\u0433\u0438\u043D"),
                    React.createElement("td", null, "\u0418\u043C\u044F"),
                    React.createElement("td", null, "\u0420\u043E\u043B\u044C"),
                    React.createElement("td", null),
                    React.createElement("td", null))),
            React.createElement("tbody", null, users))));
};
exports.default = Users;
//# sourceMappingURL=index.js.map
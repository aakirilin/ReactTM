"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var Login = function (props) {
    var p = props.props;
    return (React.createElement(react_1.Fragment, null,
        React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("input", { type: "text", id: "login-login", value: p.login, onChange: function (e) { p.setLogin(e.target.value); } }),
                    React.createElement("label", { htmlFor: "login-login" }, "\u041B\u043E\u0433\u0438\u043D")),
                React.createElement("div", null,
                    React.createElement("input", { type: "password", id: "login-password", value: p.password, onChange: function (e) { p.setPassword(e.target.value); } }),
                    React.createElement("label", { htmlFor: "login-password" }, "\u041F\u0430\u0440\u043E\u043B\u044C")),
                React.createElement("div", null,
                    React.createElement("button", { type: "button", onClick: function () { console.log('onClick'); p.onAccept(p.login, p.password); } }, "\u0412\u043E\u0439\u0442\u0438"))))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map
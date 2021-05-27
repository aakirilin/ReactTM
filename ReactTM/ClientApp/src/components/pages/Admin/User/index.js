"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./UserStyle.css");
var UserComponent = function (props) {
    var user = props.user;
    return (React.createElement(react_1.Fragment, null,
        React.createElement("div", { className: 'card' },
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u041B\u043E\u0433\u0438\u043D: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.login, onChange: function (e) { props.setLogin(e.target.value); } })),
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u0418\u043C\u044F: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.name, onChange: function (e) { props.setName(e.target.value); } })),
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u041F\u0430\u0440\u043E\u043B\u044C: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.password, onChange: function (e) { props.setPassword(e.target.value); } })),
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u0420\u043E\u043B\u044C: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.role, onChange: function (e) { props.setRole(e.target.value); } }))),
        React.createElement("div", null,
            React.createElement("button", { type: 'button', onClick: function () { props.addUser(); } }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))));
};
exports.default = UserComponent;
//# sourceMappingURL=index.js.map
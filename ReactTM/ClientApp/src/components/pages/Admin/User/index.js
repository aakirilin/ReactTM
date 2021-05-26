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
                React.createElement("input", { className: 'card-item-inputbox', value: user.login })),
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u0418\u043C\u044F: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.name })),
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u041F\u0430\u0440\u043E\u043B\u044C: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.password })),
            React.createElement("div", { className: 'card-item' },
                React.createElement("div", { className: 'card-item-title' }, "\u0420\u043E\u043B\u044C: "),
                React.createElement("input", { className: 'card-item-inputbox', value: user.role }))),
        React.createElement("div", null)));
};
exports.default = UserComponent;
//# sourceMappingURL=index.js.map
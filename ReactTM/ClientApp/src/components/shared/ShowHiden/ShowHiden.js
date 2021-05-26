"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowHiden = void 0;
var React = require("react");
var react_1 = require("react");
var ShowHiden = function (props) {
    var _a = react_1.useState(props.defaultState), state = _a[0], setState = _a[1];
    return (React.createElement(react_1.Fragment, null,
        React.createElement("div", { className: props.contentClassName },
            React.createElement("button", { type: 'button', onClick: function () { setState(!state); }, className: props.buttonClassName }, props.buttonText),
            state ? props.children : undefined)));
};
exports.ShowHiden = ShowHiden;
//# sourceMappingURL=ShowHiden.js.map
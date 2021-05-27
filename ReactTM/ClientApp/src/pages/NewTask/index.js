"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var NewTask_1 = require("../../components/pages/NewTask");
var selectors_1 = require("../../store/NewTask/selectors");
var types_1 = require("../../store/NewTask/types");
var NewTask = function () {
    var task = react_redux_1.useSelector(selectors_1.getNewTask);
    var dispatch = react_redux_1.useDispatch();
    var setTitle = function (value) { dispatch(types_1.SetTitleCreator(value)); };
    var setDeathline = function (value) { dispatch(types_1.SetDethlineCreator(value)); };
    var setDescription = function (value) { dispatch(types_1.SetDescriptionCreator(value)); };
    var dropExecutor = function (value) { dispatch(types_1.DropExecutorsCreator(value)); };
    return (React.createElement(react_1.Fragment, null,
        React.createElement(NewTask_1.default, { task: task, setTitle: setTitle, setDeathline: setDeathline, setDescription: setDescription, dropExecutor: dropExecutor })));
};
exports.default = NewTask;
//# sourceMappingURL=index.js.map
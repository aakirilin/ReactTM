"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var User_1 = require("../../../components/pages/Admin/User");
var adminApi_1 = require("../../../api/adminApi");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../store/Admin/User/selectors");
var types_1 = require("../../../store/Admin/User/types");
var UserPage = function () {
    var userId = react_router_dom_1.useParams().userId;
    var dispatch = react_redux_1.useDispatch();
    var user = react_redux_1.useSelector(selectors_1.getUser);
    var _a = react_1.useState(false), wasLoad = _a[0], setWasLoad = _a[1];
    var addUser = function () {
        adminApi_1.default.user.add(user).then().catch(function (e) { return console.log(e); });
    };
    dispatch(types_1.LoadUserCreator(userId, wasLoad, setWasLoad));
    console.log(user);
    return (React.createElement(react_1.Fragment, null,
        React.createElement(User_1.default, { user: user, setName: function (newValue) { dispatch(types_1.SetNameCreator(newValue)); }, setLogin: function (newValue) { dispatch(types_1.SetLoginCreator(newValue)); }, setPassword: function (newValue) { dispatch(types_1.SetPasswordCreator(newValue)); }, setRole: function (newValue) { dispatch(types_1.SetRoleCreator(newValue)); }, addUser: addUser })));
};
exports.default = UserPage;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var WeatherForecasts = require("./WeatherForecasts");
var Counter = require("./Counter");
var reducer_1 = require("./NewTask/reducer");
var reducer_2 = require("./Oauth/reducer");
var reducer_3 = require("./Admin/User/reducer");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    adminUser: reducer_3.AdminUserReduser,
    oauth: reducer_2.OauthReduser,
    newTask: reducer_1.NewTaskReduser,
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
};
//# sourceMappingURL=index.js.map
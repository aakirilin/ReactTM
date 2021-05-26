"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducer_1 = require("./NewTask/reducer");
/* Create root reducer, containing all features of the application */
var rootReducer = redux_1.combineReducers({
    newTask: reducer_1.NewTaskReduser,
});
var store = redux_1.createStore(rootReducer);
exports.default = store;
//# sourceMappingURL=store.js.map
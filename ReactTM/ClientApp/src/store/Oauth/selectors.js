"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDescription = exports.tokenSelector = void 0;
var tokenSelector = function (state) { return state.oauth.token; };
exports.tokenSelector = tokenSelector;
var userDescription = function (state) { return state.oauth.userDescription; };
exports.userDescription = userDescription;
//# sourceMappingURL=selectors.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _loglevelColoredLevelPrefix = _interopRequireDefault(require("loglevel-colored-level-prefix"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var options = {
  prefix: 'mern-server',
  level: 'trace'
};
var logger = (0, _loglevelColoredLevelPrefix["default"])(options);
var _default = logger;
exports["default"] = _default;
//# sourceMappingURL=logger.js.map
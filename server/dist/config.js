"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
if (process.env.NODE_ENV !== 'production') {
  try {
    _dotenv["default"].config({
      path: _path["default"].resolve(__dirname, '.env'),
      silent: true
    });
  } catch (e) {
    console.error(e.message);
  }
}
module.exports = {
  mongoose: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost/mern'
  }
};
//# sourceMappingURL=config.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jwtSimple = _interopRequireDefault(require("jwt-simple"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  generateToken: function generateToken(user) {
    var timeStamp = new Date().getTime();
    var payload = {
      sub: user.id,
      iat: timeStamp
    };
    return _jwtSimple["default"].encode(payload, _config["default"].jwt_secret);
  },
  verifyToken: function verifyToken(token, cb) {
    return token === '1234';
  }
};
exports["default"] = _default;
//# sourceMappingURL=token.js.map
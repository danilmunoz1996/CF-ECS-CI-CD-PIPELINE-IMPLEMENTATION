"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _model = _interopRequireDefault(require("./model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  updateProfile: function updateProfile(req, res, next) {
    req.user.comparedPassword(req.body.password, function (err, good) {
      if (err || !good) return res.status(401).send(err || 'Incorrect Password');
      var userId = req.user._id;
      var newProfile = {
        name: {
          first: req.body.firstName,
          last: req.body.lastName
        }
      };
      delete newProfile.email;
      delete newProfile.phone;
      delete newProfile.password;
      _model["default"].findByIdAndUpdate(userId, newProfile, {
        "new": true
      }).then(function () {
        return res.sendStatus(200);
      })["catch"](next);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=controller.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Define the model
var Schema = new _mongoose["default"].Schema({
  name: {
    first: String,
    last: String
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  emailVerified: {
    type: Boolean,
    "default": false
  },
  password: String,
  phone: {
    number: {
      type: String
    },
    verified: {
      type: Boolean,
      "default": false
    }
  }
});
Schema.pre('save', function (next) {
  // get access to user model, then we can use user.email, user.password
  var user = this;
  _bcryptNodejs["default"].genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    _bcryptNodejs["default"].hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

// Make use of methods for comparedPassword
Schema.methods.comparedPassword = function (candidatePassword, cb) {
  _bcryptNodejs["default"].compare(candidatePassword, this.password, function (err, good) {
    if (err) {
      return cb(err);
    }
    cb(null, good);
  });
};

// Export the model
var _default = _mongoose["default"].model('User', Schema);
exports["default"] = _default;
//# sourceMappingURL=model.js.map
"use strict";

var _http = _interopRequireDefault(require("http"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _logger = _interopRequireDefault(require("./util/logger"));
var _config = _interopRequireDefault(require("./config"));
var _middlewares = _interopRequireDefault(require("./api/middlewares"));
var _authentication = _interopRequireDefault(require("./api/authentication"));
var _router = _interopRequireDefault(require("./user/router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
if (!process.env.MONGODB_URI) {
  var err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/amazingandyyy/mern#prepare-your-secret');
  _logger["default"].warn(err.message);
}
var app = (0, _express["default"])();
_mongoose["default"].connect(_config["default"].mongoose.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})["catch"](function (err) {
  return console.error(err);
});
_mongoose["default"].Promise = global.Promise;

// App Setup
app.use((0, _cors["default"])({
  origin: ['http://127.0.0.1:3000']
}));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.post('/signup', _authentication["default"].signup);
app.post('/signin', _authentication["default"].signin);
app.get('/auth-ping', _middlewares["default"].loginRequired, function (req, res) {
  return res.send('connected');
});
app.use('/user', _middlewares["default"].loginRequired, _router["default"]);
app.use(function (err, req, res, next) {
  _logger["default"].error(err.message);
  res.status(422).json(err.message);
});

// Server Setup
var port = process.env.PORT || 8000;
_http["default"].createServer(app).listen(port, function () {
  _logger["default"].info("Server listening on: ".concat(port));
});
//# sourceMappingURL=index.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthController = _interopRequireDefault(require("./app/controllers/AuthController"));

var _UserController = _interopRequireDefault(require("./app/controllers/UserController"));

var _authMiddleware = _interopRequireDefault(require("./app/middlewares/authMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post('/auth', _AuthController.default.authenticate);
router.post('/users', _UserController.default.store);
router.get('/users', _authMiddleware.default, _UserController.default.index);
var _default = router;
exports.default = _default;
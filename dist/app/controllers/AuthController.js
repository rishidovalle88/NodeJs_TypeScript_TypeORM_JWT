"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthController {
  async authenticate(req, res) {
    const repository = (0, _typeorm.getRepository)(_User.default);
    const {
      email,
      password
    } = req.body;
    const user = await repository.findOne({
      where: {
        email
      }
    });
    if (!user) return res.sendStatus(401);
    const isValidPassword = await _bcryptjs.default.compare(password, user.password);
    if (!isValidPassword) return res.sendStatus(401);

    const token = _jsonwebtoken.default.sign({
      id: user.id
    }, 'secret', {
      expiresIn: '1d'
    });

    user.password = '';
    return res.json({
      user,
      token
    });
  }

}

var _default = new AuthController();

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  index(req, res) {
    return res.send({
      userID: req.userId
    });
  }

  async store(req, res) {
    const repository = (0, _typeorm.getRepository)(_User.default);
    const {
      email,
      password
    } = req.body;
    const userExist = await repository.findOne({
      where: {
        email
      }
    });
    if (userExist) return res.sendStatus(409);
    const user = repository.create({
      email,
      password
    });
    await repository.save(user);
    return res.json(user);
  }

}

var _default = new UserController();

exports.default = _default;
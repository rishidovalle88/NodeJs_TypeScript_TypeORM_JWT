"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authMuddleware;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authMuddleware(req, res, next) {
  const {
    authorization
  } = req.headers;
  if (!authorization) return res.sendStatus(401);
  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = _jsonwebtoken.default.verify(token, 'secret');

    const {
      id
    } = data;
    req.userId = id;
    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
}
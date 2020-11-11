"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("./database/connect");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.default);
app.listen(3000, () => console.log('Server no ar'));
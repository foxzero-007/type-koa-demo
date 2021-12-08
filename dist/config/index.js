"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dev_1 = require("./dev");
var prod_1 = require("./prod");
var config = process.env.NODE_ENV === "" ? dev_1.config : prod_1.config;
exports.config = config;
console.log(config);

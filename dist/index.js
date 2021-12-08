"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var controller_1 = __importDefault(require("./controller"));
var index_1 = require("./config/index");
var app = new koa_1.default();
app.use(controller_1.default.routes()).use(controller_1.default.allowedMethods());
app.listen(index_1.config.port);
app.env = index_1.config.env;

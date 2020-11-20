"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./users.routes"));
var hospitals_routes_1 = __importDefault(require("./hospitals.routes"));
var session_routes_1 = __importDefault(require("./session.routes"));
var routes = express_1.Router();
routes.use('/users', users_routes_1.default);
routes.use('/hospitals', hospitals_routes_1.default);
routes.use('/session', session_routes_1.default);
exports.default = routes;
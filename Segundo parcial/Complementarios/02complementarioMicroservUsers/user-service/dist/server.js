"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = require("./src/routes/user");
const db_1 = require("./src/database/db");
class Server {
    constructor() {
        this.app = (0, express_1.Router)();
        this.router = (0, express_1.Router)();
        this.port = Number(process.env["PORT"]);
        this.paths = {
            users: '/api/users'
        };
        this.conexionDB();
        this.middleware();
        this.routes();
        this.router.use('/TecnoService', this.app);
        this._express = (0, express_1.default)().use(this.router);
    }
    conexionDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.dbConnection)();
        });
    }
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true })); //NOS SERVIRA EN LOS FORMULARIO
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.paths.users, user_1.api);
    }
    listen() {
        this._express.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}/TecnoService/api/users `);
            console.log("CONEXIÓN CORRECTA");
            console.log("*******************************************");
        });
    }
}
exports.Server = Server;

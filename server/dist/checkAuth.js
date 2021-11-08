"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_1 = require("apollo-server");
const checkAuth = (req) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split("Bearer ")[1];
        if (token) {
            try {
                const user = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
                return user;
            }
            catch (error) {
                throw new apollo_server_1.AuthenticationError("Invalid Authentication token");
            }
        }
        throw new Error("Authentication token must be 'Bearer <token>' ");
    }
    throw new Error("Authorization header must be provided");
};
exports.default = checkAuth;
//# sourceMappingURL=checkAuth.js.map
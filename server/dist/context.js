"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: [
        { emit: "stdout", level: "query" },
        { emit: "stdout", level: "info" },
        { emit: "stdout", level: "error" },
    ],
});
const context = ({ req }) => ({
    req,
    prisma,
});
exports.context = context;
//# sourceMappingURL=context.js.map
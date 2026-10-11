"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = require("node:path");
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const envelope_1 = require("./utils/envelope");
const notFound_1 = require("./middleware/notFound");
const errorhandler_1 = require("./middleware/errorhandler");
dotenv_1.default.config({
    path: [
        (0, node_path_1.resolve)(process.cwd(), '.env'),
        (0, node_path_1.resolve)(process.cwd(), '..', '.env')
    ]
});
async function mainEntryFunction() {
    await (0, db_1.connectDB)();
    const app = (0, express_1.default)();
    const corsOrigins = (process.env.CORS_ORIGINS || "http://localhost:3000")
        .split(",").map(origin => origin.trim()).filter(Boolean);
    app.use((0, cors_1.default)({
        origin: corsOrigins,
        credentials: true
    }));
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)('dev'));
    app.get("/health", (req, res) => {
        res.status(200).json((0, envelope_1.ok)({ message: "server is healthy in running state" }));
    });
    app.use(notFound_1.notFound);
    app.use(errorhandler_1.errorHandler);
    const port = Number(process.env.PORT || 5000);
    app.listen(port, () => {
        console.log(`server is now listening to port  ${port}`);
    });
}
mainEntryFunction().catch((err) => {
    console.error("failed to start", err);
    process.exit(1);
});

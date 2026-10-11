"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB() {
    const uri = process.env.MONGO_URI?.trim();
    if (!uri) {
        throw new Error("MONGO_URI is not set. Add it to the repository-root .env file or Backend/.env.");
    }
    await mongoose_1.default.connect(uri);
    console.log("db connected");
}

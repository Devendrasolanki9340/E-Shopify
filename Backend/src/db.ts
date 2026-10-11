

import mongoose from "mongoose"

export async function connectDB(){
    const uri = process.env.MONGO_URI?.trim()
    if (!uri) {
        throw new Error("MONGO_URI is not set. Add it to the repository-root .env file or Backend/.env.")
    }

    await mongoose.connect(uri)
    console.log("db connected")
}
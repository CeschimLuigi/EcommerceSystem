import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectMongo() {
    try {
        await mongoose.connect( process.env.MONGODB_URL || "mongodb://localhost:27018/catalogo");
        console.log("✅ MongoDB conectado com sucesso");
        console.log(mongoose.connection.name);
    } catch (err) {
        console.error("Erro ao conectar no MongoDB:", err);
    }
}

export default connectMongo;
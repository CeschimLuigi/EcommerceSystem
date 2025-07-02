import mongoose from "mongoose";

async function connectMongo() {
    try {
        await mongoose.connect("mongodb://localhost:27018/catalogo");
        console.log("✅ MongoDB conectado com sucesso");
    } catch (err) {
        console.error("Erro ao conectar no MongoDB:", err);
    }
}

export default connectMongo;
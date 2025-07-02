import mongoose from "mongoose";



const ProdutoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    descricao: String,
    preco: Number,
    imagemURL: String,
    featured: Boolean,
});

ProdutoSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
        delete ret._id;
    }
})

export default mongoose.model("Produto", ProdutoSchema);
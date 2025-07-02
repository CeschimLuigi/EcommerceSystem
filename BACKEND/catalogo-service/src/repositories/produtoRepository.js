import Produto from '../models/produtoModel.js'


async function buscarProdutosFeatureds() {

    const produtos = await Produto.find({featured: true})
    console.log(produtos);
    return produtos;
}

export default {buscarProdutosFeatureds};


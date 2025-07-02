import produtoRepository  from "../repositories/produtoRepository.js";
import cache from "../utils/cache.js";

async function buscarProdutos(){

    const key = 'produtos-featureds';
    const cacheHit = await cache.getCache(key);


    if (cacheHit){
        console.log('VEIO DO REDIS');

        return cacheHit;
    }

    const produtos = await produtoRepository.buscarProdutosFeatureds();

    await cache.setCache(key, produtos);

    console.log("veio do MONGO");



    return produtos;
}
export default {buscarProdutos};
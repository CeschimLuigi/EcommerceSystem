import buscaService from '../services/buscaService.js';

export async function busca(req, res) {
    try {

        const produtos = await buscaService.buscarProdutos();
        res.status(201).json(produtos);
    }catch (e){
        console.log(e);
        res.status(500).json({message: e.message});
        throw new Error(e)
    }
}
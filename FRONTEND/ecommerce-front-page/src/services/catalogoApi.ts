import axios from 'axios';

export async function buscarProdutos() {
 try {
     return axios.get( process.env.BACKEND_CATALOGO_URL ||'http://localhost:3000/produtos');
 }catch (e){
     throw new Error("erro ao buscar produtos: " + e)

 }
}
import axios from "axios";




export async function criarTransacaoPix(amount: number) {
    try {
        const response = await axios.post(
            `http://localhost:3000/create-pix`, {amount}, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
        
        return response.data;
    }catch (e) {
        throw new Error("Falha ao enviar pedido" + e);
    }

    
}

export async function enviarPedido(payload: object) {
    try {
        const response = await axios.post(
            `http://localhost:8080/transacao`, payload, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        return response.status;

    }catch (e:any) {
        throw new Error("Falha ao enviar pedido " + e.message);
    }
}
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/context/cartContext/useCart.ts";
import {usePedido} from "@/context/pedidoContext/usePedido.ts";
import { criarTransacaoPix, enviarPedido } from "@/services/pedidoReq";
import {PixDialog} from "@/components/ResumoPix.tsx";


export function FormCliente() {
const { cart } = useCart();
const {setPagamento} = usePedido()

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [taxId, setTaxId] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0) * 100;
  const [abrirDialog, setAbrirDialog] = useState(false);



    async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const dadosCliente = {
    nome,
    email,
    taxId,
    cellphone,
    endereco,
    observacoes,
  };

    console.log(dadosCliente);

    try{
        const pix = await criarTransacaoPix(total);
        setPagamento(pix);
        setAbrirDialog(true);




        const payload = {
            cliente: dadosCliente,
            itens: cart,
            amount: cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0) * 100,
            pix
        };
        console.log(pix);

        const response = await enviarPedido(payload)

        console.log(response)


    }catch(e:any){
        throw  new Error("Erro ao enviar " + e.message);
    }



  }


  return (
    <>

    <form onSubmit={handleSubmit} aria-required={true} className="space-y-4">
      <Input
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required={true}

      />
      <Input
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
        type="email"
      />
       <Input
        placeholder="Seu CPF (ex: 123-456-789-01)"
        value={taxId}
        onChange={(e) => setTaxId(e.target.value)}
        required={true}
      />
       <Input
        placeholder="Seu celular"
        value={cellphone}
        onChange={(e) => setCellphone(e.target.value)}
        required={true}

      />
      
      <Input
        placeholder="Endereço (rua, número, bairro...)"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        required={true}
      />
      <Textarea
        placeholder="Observações: sem nozes, entrega à tarde, portaria..."
        value={observacoes}
        onChange={(e) => setObservacoes(e.target.value)}
        className="resize-none"
      />
      <Button type="submit" className="w-full bg-[#6D4C41] text-white hover:bg-[#5D4037]">
        Enviar pedido
      </Button>
    </form>


        <PixDialog open={abrirDialog} onOpenChange={setAbrirDialog}/>



    </>

);


}
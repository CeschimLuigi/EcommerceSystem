import { useState } from "react";
import { PedidoContext, type Cliente, type Pagamento } from "./PedidoContext.ts";

export function PedidoProvider({ children }: { children: React.ReactNode }) {
  const [cliente, setCliente] = useState<Cliente>({
    nome: "",
    email: "",
    taxId: "",
    cellphone: "",
    endereco: "",
    observacoes: "",
  });
  const [pagamento,  setPagamento] = useState<Pagamento>({
    id:"",
    brCodeBase64:"",
    brCode:"",
    status:"",
    createdAt:"",
    expiresAt:"",
    amount:0
  });


  return (
    <PedidoContext.Provider value={{ cliente, setCliente, pagamento, setPagamento  }}>
      {children}
    </PedidoContext.Provider>
  );
}
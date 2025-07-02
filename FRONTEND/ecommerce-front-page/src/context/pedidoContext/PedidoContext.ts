// context/PedidoContext.ts
import { createContext } from "react";


export type Cliente = {
  nome: string;
  email:string;
  taxId:string;
  cellphone:string;
  endereco: string;
  observacoes?: string;
};

export type Pagamento = {
  id: string,
  brCodeBase64:string,
  brCode: string,
  status:any,
  createdAt:string,
  expiresAt:string,
  amount:number,
}

export type PedidoContextType = {
  cliente: Cliente;
  setCliente: (data: Cliente) => void;
  pagamento:Pagamento;
  setPagamento: (data: Pagamento) => void;
};

export const PedidoContext = createContext<PedidoContextType | null>(null);
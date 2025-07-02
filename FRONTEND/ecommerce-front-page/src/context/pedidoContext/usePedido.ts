import { useContext } from "react";
import { PedidoContext } from "./PedidoContext.ts";


export const usePedido = () => {
  const context = useContext(PedidoContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
};
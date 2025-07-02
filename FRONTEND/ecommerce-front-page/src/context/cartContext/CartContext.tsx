import { useState } from "react";
import { CartContext, type CartItem } from "./CartContext.ts";
import type { Produto } from "@/data/produtos.ts";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (produto: Produto) => {
    setCart((prev) => {
      const existente = prev.find((item) => item.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const removeToCart = (produto: Produto) => {
    setCart((prev) => {
      const existente = prev.find((item) => item.id === produto.id);
      if(!existente){
        return prev;
      }

      if (existente.quantidade > 1 ) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        );
      }
      return prev.filter((item) => item.id !== produto.id);

    });
  };

   const clearAll = () => setCart([]);

   

  return (
    <CartContext.Provider value={{ cart, addToCart, removeToCart, clearAll  }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };

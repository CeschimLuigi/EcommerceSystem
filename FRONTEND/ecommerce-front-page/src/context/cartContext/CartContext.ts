import { createContext } from "react";
import type { Produto } from "@/data/produtos.ts";

export type CartItem = Produto & { quantidade: number };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (produto: Produto) => void;
  removeToCart:(produto: Produto) => void;
  clearAll:() => void;
  
  
};

export const CartContext = createContext<CartContextType | undefined>(undefined);
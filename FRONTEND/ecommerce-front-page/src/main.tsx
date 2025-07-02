import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {CartProvider} from "@/context/cartContext/CartContext.tsx";
import {PedidoProvider} from "@/context/pedidoContext/pedidoContext.tsx";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
  <CartProvider>
    <PedidoProvider>
    <App />    
    </PedidoProvider>
  </CartProvider>
  
  </StrictMode>,
)

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartContext/useCart.ts";
import { Badge } from "@/components/ui/badge"
import { FormClienteDrawer } from "./FormClienteComponent";
import { useState } from "react";



export function CarrinhoSidebar() {
  const { cart, addToCart, removeToCart, clearAll } = useCart();
  const [formOpen, setFormOpen] = useState(false);


  const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);
  const Total = cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0.00 )


  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
  <Button variant="outline" className="relative bg-amber-50 border-none ">
    🛒
    {totalItens > 0 && (
      <Badge
        variant="destructive"
        className="absolute -top-2 -right-1 h-5 min-w-5 rounded-full px-1 text-xs font-mono tabular-nums"
      >
        {totalItens}
      </Badge>
    )}
    <span className="ml-1">Carrinho</span>
  </Button>
</DrawerTrigger>



      <DrawerContent className="w-[350px] p-4 rounded-l-2xl border-none">
        <h2 className="text-xl font-bold mb-4">Seu Carrinho</h2>

        {cart.length === 0 ? (
          <p className="text-muted-foreground">Carrinho vazio 😢</p>
        ) : (
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.nome}</p>
                  <p className="text-sm text-muted-foreground">
                    Quantidade: {item.quantidade}
                  </p>
                   <p className="text-sm text-muted-foreground">
                    preço: R${item.preco} 
                  </p>
                  
                </div>
                <div className="flex gap-2">
                    <Button size="sm" onClick={() => addToCart(item)}>+</Button>
                    <Button size="sm" onClick={() => removeToCart(item)}>-</Button>
                </div>
              </li>

              
            ))}
            <div className="flex justify-between items-center">
                <div>
                     <h2 className="text-xl font-bold">Total a pagar:</h2>
            <p className="text-l text-muted-foreground">
                    Total: R${Total} 
            </p>
                </div>
           
             <div className="flex gap-2">
                <Button size="sm" onClick={() => clearAll()}>Limpar carrinho</Button>
             </div>
             </div>
              <DrawerFooter>
       <Button size="sm"
              className="bg-[#6D4C41] text-white hover:bg-[#5D4037] w-full"
              onClick={() => setFormOpen(true)}>
              Finalizar pedido
        </Button>

              </DrawerFooter>
              <FormClienteDrawer open={formOpen} onOpenChange={setFormOpen} />
          </ul>
          
        )}

      
      </DrawerContent>
      
    </Drawer>
  );
}
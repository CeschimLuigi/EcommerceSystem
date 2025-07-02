import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Produto } from "@/data/produtos";
import { useCart } from "@/context/cartContext/useCart.ts"
import { toast } from "sonner"

type Props = {
    produto:Produto;
};



export function ProdutoCard({ produto }: Props){
    const { addToCart, removeToCart } = useCart();

    return (
    <Card className="w-60 max-w-3xl border-none">
      <CardContent>
        <img
          src={produto.imagemURL}
          alt={produto.nome}
          className="w-full h-48 object-cover rounded-md mb-2"
        />
         <p className="text-lg font-semibold text-brown-800">{produto.nome}</p>
        <p className="text-lg font-semibold text-brown-800">R$ {produto.preco.toFixed(2)}</p>
        <p className="text-left text-brown-800">{produto.descricao}</p>
      </CardContent>
      <CardFooter>
        <Button 
  onClick={() => {
    addToCart(produto);
    toast (
        `${produto.nome}: foi adicionado ao carrinho` , {
            description: `adicionado em: ${new Date().toLocaleDateString()} as: ${new Date().toLocaleTimeString()}  `,
            action:{
                label:"Desfazer",
                onClick: ()=> removeToCart(produto),
            },

        }
    );
  }}
  className="w-full"
>
  Adicionar ao carrinho
</Button>

      </CardFooter>
    </Card>
  );

}


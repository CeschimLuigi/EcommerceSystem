import { useEffect, useState } from "react";
import { ProdutoCard } from "@/components/ProdutoCard";
import { type Produto } from "@/data/produtos";
import axios from "axios";
import * as process from "node:process";







export function ProdutoList() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
      axios.get<Produto[]>( process.env.BACKEND_GATEWAY_SERVICE_URL ||`http://localhost:3001/produtos`)
          .then((response) => setProdutos(response.data))
          .catch((error) => console.error(error))
    }, []);

    console.log(produtos);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {produtos.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
            ))}
        </div>
    );
}
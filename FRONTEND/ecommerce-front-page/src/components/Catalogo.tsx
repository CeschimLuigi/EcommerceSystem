import {ProdutoList} from "@/components/ProdutosList.tsx";


export function Catalogo() {
  return (
    <section className="p-6 flex flex-col  ">
    <h2 className="text-4xl font-semibold text-center monoton-regular mb-6 ">
  <span className="">Que tal</span>{' '}
  <span className="text-amber-700">experimentar</span>{' '}
  <span className=""> algo</span>{' '}
  <span className="text-pink-500">gostoso hoje?</span>
</h2>


      {/* Filtros ou botões podem entrar aqui futuramente */}
    <div className="max-w-7xl mx-auto">
         <ProdutoList/>
      </div>
    </section>
  );
}

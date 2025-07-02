import { Header } from "@/components/Header";
import { Catalogo } from "@/components/Catalogo";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-24 ">
      <Header />
      
      <Catalogo/>
    </div>
  );
}

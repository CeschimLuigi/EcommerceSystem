import { CarrinhoSidebar } from "@/components/CarrinhoSideBar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevY, setPrevY] = useState(0);

  useMotionValueEvent(scrollY, "change", (currentY) => {
    if (currentY > prevY && currentY > 100) {
      setHidden(true); // Rolando pra baixo
    } else {
      setHidden(false); // Rolando pra cima
    }
    setPrevY(currentY);
  });

  return (
    <motion.header
  className="fixed top-0 w-full z-50 bg-amber-50/80 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between"
  animate={{ y: hidden ? "-100%" : "0%" }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
>

      <h1 className="text-xl font-bold text-pink-600">🍫</h1>
      <p className="text-zinc-900 text-5xl text-center pirata-one-regular">Mão no Brownie</p>
      <CarrinhoSidebar />
    </motion.header>
  );
}
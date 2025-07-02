// components/FormClienteDrawer.tsx
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FormCliente } from "./FormCliente";


export function FormClienteDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="w-full max-w-md p-4 rounded-l-2xl border-none">
        <DrawerHeader>
          <DrawerTitle>Informações do Cliente</DrawerTitle>
          <DrawerDescription>Preencha os dados para concluir o pedido</DrawerDescription>
        </DrawerHeader>
        <FormCliente />
        <DrawerClose asChild>
          <Button variant="outline" className="mt-4">Fechar</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
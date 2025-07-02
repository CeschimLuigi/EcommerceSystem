// lib/validators/pedido.ts
import { z } from "zod";

export const clienteSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  endereco: z.string().min(5, "Endereço obrigatório"),
  observacoes: z.string().optional(),
});

export type ClienteData = z.infer<typeof clienteSchema>;
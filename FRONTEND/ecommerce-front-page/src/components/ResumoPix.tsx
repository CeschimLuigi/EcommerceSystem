import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePedido } from "@/context/pedidoContext/usePedido.ts";
import { useState } from "react";
import { Check, Clipboard } from "lucide-react";

export function PixDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const { pagamento } = usePedido();
    const [copiado, setCopiado] = useState(false);

    const handleCopy = async () => {
        if (pagamento?.brCodeBase64) {
            await navigator.clipboard.writeText(pagamento.brCode);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md animate-in fade-in-90 slide-in-from-top-4">
                <DialogHeader>
                    <DialogTitle className="text-center">Pagamento via Pix</DialogTitle>
                </DialogHeader>

                <img src={pagamento?.brCodeBase64} alt="QR Code Pix" className="mx-auto max-h-56 rounded" />

                <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-sm p-2 border rounded bg-muted">
                    <code className="flex-1">{pagamento?.brCode}</code>
                    <Button onClick={handleCopy} size="sm" variant="secondary" className="shrink-0">
                        {copiado ? <Check size={16} className="text-green-600" /> : <Clipboard size={16} />}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}


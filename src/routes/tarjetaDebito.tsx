import debito from "@/features/tarjetaDebito/index/debito";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tarjetaDebito")({
  component: debito,
});

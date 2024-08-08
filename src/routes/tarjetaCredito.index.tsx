import credito from "@/features/tarjetaCredito/index/credito";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tarjetaCredito/")({
  component: credito,
});

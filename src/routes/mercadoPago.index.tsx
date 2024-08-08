import pagoQR from "@/features/mercadoPago/index/pagoQR";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mercadoPago/")({
  component: pagoQR,
});

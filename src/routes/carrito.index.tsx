import Carrito from "@/features/carrito/index/compra";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/carrito/")({
  component: Carrito,
});

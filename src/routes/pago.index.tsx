import pago from "@/features/pago/index/pago";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pago/")({
  component: pago,
});

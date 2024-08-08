import casaCentral from "@/features/local/index/casaCentral";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/local/")({
  component: casaCentral,
});

import ExamplePage from "@/features/inicio/index/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inicio/")({
  component: ExamplePage,
});

import { createFileRoute } from "@tanstack/react-router";
import cede from "@/features/franquicia/index/cede";
export const Route = createFileRoute("/franquicia/")({
  component: cede,
});

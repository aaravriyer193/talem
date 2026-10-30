import { createFileRoute } from "@tanstack/react-router";
import ProgramsPage from "../legacy/Pages/ProgramsPage.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/programs/")({
  head: () => routeHead({ title: "College Programs Made Easy — Talem", description: "Find summer programs, pre-college programs, research opportunities, and more in Talem’s free database.", path: "/programs", image: "programs", imageAlt: "Find the perfect college programs — Talem" }),
  component: ProgramsPage,
});

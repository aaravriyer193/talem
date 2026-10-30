import { createFileRoute } from "@tanstack/react-router";
import Applications from "../legacy/Pages/Applications.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/app")({
  head: () => routeHead({ title: "College Application Database — Talem", description: "Explore real college applications, academics, activities, awards, and essays from admitted students.", path: "/app", image: "applications", imageAlt: "Real college applications — Talem" }),
  component: Applications,
});

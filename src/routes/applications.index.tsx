import { createFileRoute } from "@tanstack/react-router";
import Applications from "../legacy/Pages/Applications.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/applications/")({
  head: () => routeHead({ title: "Real, High-Quality College Applications — Talem", description: "Explore real college applications from students admitted to Ivy League and other top schools.", path: "/applications", image: "applications", imageAlt: "Real college applications — Talem" }),
  component: Applications,
});

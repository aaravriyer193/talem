import { createFileRoute } from "@tanstack/react-router";
import ExtracurricularsRoute from "../legacy/ExtracurricularsRoute.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/extracurriculars")({
  head: () => routeHead({ title: "Extracurriculars and Internships Made Easy — Talem", description: "Explore hundreds of high-quality high school extracurricular and internship opportunities with more than 50 filters.", path: "/extracurriculars", image: "extracurriculars", imageAlt: "Extracurriculars made easy — Talem" }),
  component: ExtracurricularsRoute,
});

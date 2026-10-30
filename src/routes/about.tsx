import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../legacy/Pages/AboutPage.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/about")({
  head: () => routeHead({ title: "About Talem", description: "Our mission is to help students everywhere find extracurriculars and resources for their high school careers.", path: "/about", image: "about", imageAlt: "Educational resources, accessible to every student — Talem" }),
  component: AboutPage,
});

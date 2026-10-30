import { createFileRoute } from "@tanstack/react-router";
import Homepage from "../legacy/Pages/Homepage.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/")({
  head: () =>
    routeHead({
      title: "Talem - Extracurriculars Made Easy",
      description:
        "Find hundreds of high-quality extracurriculars & internships for highschoolers easily using our massive and free database.",
      path: "/",
      image: "home",
    }),
  component: Homepage,
});

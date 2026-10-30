import { createFileRoute } from "@tanstack/react-router";
import ProgramDetails from "../legacy/Pages/ProgramDetails.jsx";
import collegeProgramsData from "../legacy/Data/collegeProgramsData.js";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => {
    const college = collegeProgramsData[params.slug];
    const name = college?.title ?? "College";
    return routeHead({ title: `Summer Programs at ${name} — Talem`, description: `View summer programs, research opportunities, and more for high school students at ${name}.`, path: `/programs/${params.slug}`, image: college ? `programs-${params.slug}` : "programs", imageAlt: `Programs at ${name} — Talem` });
  },
  component: ProgramDetails,
});

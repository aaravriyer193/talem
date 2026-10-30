import { createFileRoute } from "@tanstack/react-router";
import CollegeInformation from "../legacy/Pages/CollegeInformation.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/college-search")({
  head: () => routeHead({ title: "College Information Search — Talem", description: "Find important admissions and academic information for leading colleges and universities.", path: "/college-search" }),
  component: CollegeInformation,
});

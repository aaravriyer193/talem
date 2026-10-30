import { createFileRoute } from "@tanstack/react-router";
import CareerForm from "../legacy/Pages/CareerForm.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/apply-form")({
  head: () => routeHead({ title: "Apply to Work With Talem", description: "Apply to join Talem and help make educational resources available to students everywhere.", path: "/apply-form" }),
  component: CareerForm,
});

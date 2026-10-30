import { createFileRoute } from "@tanstack/react-router";
import Profile from "../legacy/Pages/Profile.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/profile")({
  head: () => routeHead({ title: "Student Profile — Talem", description: "View a Talem student profile, biography, activity, and favorite articles.", path: "/profile" }),
  component: Profile,
});

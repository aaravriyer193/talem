import { createFileRoute } from "@tanstack/react-router";
import JoinPage from "../legacy/Pages/JoinPage.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/join")({
  head: () => routeHead({ title: "Join the Talem Team", description: "Help Talem make educational resources and opportunities available to students around the world.", path: "/join" }),
  component: JoinPage,
});

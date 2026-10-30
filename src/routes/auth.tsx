import { createFileRoute } from "@tanstack/react-router";
import Auth from "../legacy/Pages/Auth.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/auth")({
  head: () => routeHead({ title: "Sign In or Join — Talem", description: "Sign in to Talem or create an account to save opportunities and build your student profile.", path: "/auth" }),
  component: Auth,
});

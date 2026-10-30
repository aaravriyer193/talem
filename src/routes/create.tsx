import { createFileRoute } from "@tanstack/react-router";
import AddEditBlog from "../legacy/Pages/AddEditBlog.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/create")({
  head: () => routeHead({ title: "Create a Talem Blog Post", description: "Create and publish a new educational article for Talem students.", path: "/create", type: "article" }),
  component: AddEditBlog,
});

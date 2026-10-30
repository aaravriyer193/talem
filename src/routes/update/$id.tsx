import { createFileRoute } from "@tanstack/react-router";
import AddEditBlog from "../../legacy/Pages/AddEditBlog.jsx";
import { routeHead } from "../../lib/route-head";

export const Route = createFileRoute("/update/$id")({
  head: ({ params }) => routeHead({ title: "Edit a Talem Blog Post", description: "Update an educational article for Talem students.", path: `/update/${params.id}`, type: "article" }),
  component: AddEditBlog,
});

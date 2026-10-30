import { createFileRoute } from "@tanstack/react-router";
import Detail from "../../legacy/Pages/Detail.jsx";
import { routeHead } from "../../lib/route-head";

export const Route = createFileRoute("/detail/$id")({
  head: ({ params }) => routeHead({ title: "Talem Blog", description: "Read student-focused advice, resources, and opportunity guides from Talem.", path: `/detail/${params.id}`, type: "article" }),
  component: Detail,
});

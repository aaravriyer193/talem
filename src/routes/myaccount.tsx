import { createFileRoute } from "@tanstack/react-router";
import MyAccount from "../legacy/Pages/MyAccount.jsx";
import { routeHead } from "../lib/route-head";

export const Route = createFileRoute("/myaccount")({
  head: () => routeHead({ title: "Account Settings — Talem", description: "Manage your Talem profile and account settings.", path: "/myaccount" }),
  component: MyAccount,
});

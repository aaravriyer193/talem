import { createFileRoute } from "@tanstack/react-router";
import ApplicationPage from "../../legacy/Pages/ApplicationPage.jsx";
import applicationsData from "../../legacy/Data/applications.js";
import { routeHead } from "../../lib/route-head";

export const Route = createFileRoute("/applications/$applicationid")({
  head: ({ params }) => {
    const application = applicationsData[Number.parseInt(params.applicationid, 10)];
    const school = application?.seo ?? "College";
    return routeHead({ title: `View an ${school} Admit’s Application — Talem`, description: `Explore the academics, test scores, extracurriculars, awards, recommendations, and more from an applicant admitted to ${school}.`, path: `/applications/${params.applicationid}`, image: "applications", imageAlt: "Real college applications — Talem" });
  },
  component: ApplicationPage,
});

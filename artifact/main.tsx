// Static build of the Talem site for a claude.ai artifact preview. The sandbox
// has no URL routing and no third-party network, so pages route in memory and
// the extracurricular database uses its bundled copy (see VITE_SANDBOX).
import "@fontsource-variable/geist";
import "./styles.css";

import { StrictMode, useEffect, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import SiteNav from "../src/components/talem/SiteNav";
import { setNavigator } from "../src/components/talem/navigate";
import Homepage from "../src/legacy/Pages/Homepage.jsx";
import ExtracurricularsRoute from "../src/legacy/ExtracurricularsRoute.jsx";
import ProgramsPage from "../src/legacy/Pages/ProgramsPage.jsx";
import ProgramDetails from "../src/legacy/Pages/ProgramDetails.jsx";
import AboutPage from "../src/legacy/Pages/AboutPage.jsx";
import Applications from "../src/legacy/Pages/Applications.jsx";
import ApplicationPage from "../src/legacy/Pages/ApplicationPage.jsx";
import JoinPage from "../src/legacy/Pages/JoinPage.jsx";

function Shell() {
  // Plain <a href="/..."> links inside the legacy pages route in memory too.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (!link || !href || !href.startsWith("/") || link.getAttribute("target") === "_blank") return;
      event.preventDefault();
      void router.navigate({ to: href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <SiteNav />
      <Outlet />
    </>
  );
}

const rootRoute = createRootRoute({ component: Shell });
const page = (path: string, component: () => ReactNode) =>
  createRoute({ getParentRoute: () => rootRoute, path, component });

const routeTree = rootRoute.addChildren([
  page("/", Homepage),
  page("/extracurriculars", ExtracurricularsRoute),
  page("/ecs", ExtracurricularsRoute),
  page("/programs", ProgramsPage),
  page("/programs/$slug", ProgramDetails),
  page("/about", AboutPage),
  page("/applications", Applications),
  page("/applications/$applicationid", ApplicationPage),
  page("/join", JoinPage),
]);

const router = createRouter({
  routeTree,
  history: createMemoryHistory({ initialEntries: ["/"] }),
});

setNavigator((path) => void router.navigate({ to: path }));
router.subscribe("onResolved", () => window.scrollTo(0, 0));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

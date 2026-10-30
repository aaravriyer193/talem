import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // The ported legacy app is a pure client-side SPA (reads window/localStorage
  // during render), so server rendering is disabled. defaultSsr is supported at
  // runtime by the router core but omitted from createRouter's public types.
  const options = {
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultSsr: false,
  };
  const router = createRouter(options as unknown as Parameters<typeof createRouter>[0]);

  return router;
};

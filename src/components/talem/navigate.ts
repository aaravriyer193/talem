// Navigation for controls that aren't plain links (the Specular Button renders a
// <button>). The artifact build routes in memory and registers its router here.
let routerNavigate: ((path: string) => void) | null = null;

export function setNavigator(navigate: (path: string) => void) {
  routerNavigate = navigate;
}

export function navigateTo(href: string, newTab = false) {
  if (newTab) {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    return;
  }
  if (routerNavigate && href.startsWith("/")) routerNavigate(href);
  else window.location.href = href;
}

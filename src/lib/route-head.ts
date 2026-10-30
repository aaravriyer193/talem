export const SITE_URL = "https://talem.org";

type RouteHeadOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  // Social preview image in public/og (without extension).
  image?: string;
  imageAlt?: string;
};

export function ogImageUrl(name: string) {
  return `${SITE_URL}/og/${name}.jpg`;
}

export function routeHead({
  title,
  description,
  path,
  type = "website",
  image = "home",
  imageAlt = "Talem — high school made easy",
}: RouteHeadOptions) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = ogImageUrl(image);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: "Talem" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

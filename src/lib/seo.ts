import type { Metadata } from "next";
import { details } from "@/lib/details";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const siteConfig = {
  name: details.name,
  url: details.url,
  ogImage: details.ogImage,
  description: details.description,
};

export function generateSEO({
  title,
  description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export { siteConfig };

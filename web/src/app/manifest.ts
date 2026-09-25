import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VBC Limited",
    short_name: "VBC",
    start_url: "/",
    display: "standalone",
    background_color: "#05060f",
    theme_color: "#05060f",
    icons: [
      { src: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

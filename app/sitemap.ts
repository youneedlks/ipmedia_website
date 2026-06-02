import type { MetadataRoute } from "next";

const base = "https://media-sochi.ru";

const paths = [
  "",
  "/tarify",
  "/uslugi/internet",
  "/uslugi/iptv",
  "/uslugi/telefoniya",
  "/uslugi/co-location",
  "/uslugi/videonablyudenie",
  "/uslugi/kompyuternaya-pomoshch",
  "/zastroyshchikam",
  "/o-kompanii",
  "/kontakty",
  "/oplata",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" || p === "/tarify" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "/tarify" ? 0.9 : 0.7,
  }));
}

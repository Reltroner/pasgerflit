import type { Metadata } from "next";
import { HomepageExperience } from "@/components/homepage";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Aviation Civilization",
  description:
    "Digital window into life inside Pasgerflit, the sovereign sky nation of Asthortera—organized around aviation, mobility, and transit culture.",
  path: "/",
});

export default function HomePage() {
  return <HomepageExperience />;
}


import type { ReactNode } from "react";

export * from "./ArrivalHero";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}


import type { ReactNode } from "react";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

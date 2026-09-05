import type { ReactNode } from "react";
import type { NavigationProps } from "./Navigation";

export * from "./Navigation";

/**
 * Backward-compatible alias for navigation component props.
 */
export type NavigationComponentProps = NavigationProps & {
  children?: ReactNode;
};

import { ReactNode } from "react";

export interface CardProps {
  col?: number;
  column?: boolean;
  noBackground?: boolean;
  noPadding?: boolean;
  noMargin?: boolean;
  children?: ReactNode;
}

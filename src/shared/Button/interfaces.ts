import { ReactNode } from "react";
import { BUTTON_ALIGNMENTS, BUTTON_SIZES, BUTTON_TYPES } from "./constants";
import { IconProps } from "../Icon/interfaces";

export interface ButtonWrapperProps {
  size?: keyof typeof BUTTON_SIZES;
  alignment?: keyof typeof BUTTON_ALIGNMENTS;
  type?: keyof typeof BUTTON_TYPES;
  active?: boolean;
  warning?: boolean;
  error?: boolean;
  ignoreMinWidth?: boolean;
  theme: any; // Adjust `any` to your theme type if available
  disabled?: boolean;
}

export interface ButtonProps {
  children?: ReactNode;
  icon?: string;
  iconType?: string;
  iconProps?: Partial<IconProps>;
  forwardRef?: React.Ref<HTMLButtonElement>;
  [key: string]: any; // To allow additional props
}

import { BUTTON_ALIGNMENTS, BUTTON_SIZES, BUTTON_TYPES } from "./constants";

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

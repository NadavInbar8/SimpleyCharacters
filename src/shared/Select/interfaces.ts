import { Props as ReactSelectProps } from "react-select";

export interface SelectInputProps extends ReactSelectProps {
  name: string;
  label?: string;
  register?: (name: string) => any; // react-hook-form's register function
  error?: any;
  control: any; // react-hook-form's control object
  validation?: Record<string, any>;
}
export interface Option {
  label: string | number;
  value: any;
}

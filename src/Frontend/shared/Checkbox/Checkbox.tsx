import React from "react";
import styled from "styled-components";
import { Controller, Control } from "react-hook-form";
import { Label as LabelOrigin } from "../Label/Label";
import { Flexbox } from "../Flexbox/Flexbox";

// Props for Wrapper
interface WrapperProps {
  hasLabel?: boolean;
  noMinWidth?: boolean;
}

// Wrapper Styled Component
const Wrapper = styled(Flexbox)<WrapperProps>`
  ${({ hasLabel }) => hasLabel && "min-width: 160px;"};
  ${({ noMinWidth }) => noMinWidth && "min-width: auto;"}
`;

// Props for Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasLabel?: boolean;
  isRounded?: boolean;
}

// Input Styled Component
const Input = styled.input<InputProps>`
  min-width: 20px;
  min-height: 20px;
  -webkit-appearance: none;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  font-family: "Material Symbols Outlined";
  font-weight: 600;
  margin-left: 0;
  ${({ hasLabel }) => hasLabel && "margin-right: 13px;"};
  outline: none;
  padding: 8px;
  position: relative;
  ${({ isRounded }) => isRounded && "border-radius: 50%;"}
  &:checked {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
  }
  &:checked:after {
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    content: icon;
    color: ${({ theme }) => theme.colors.blue6};
    font-size: ${({ theme }) => theme.fonts.normal};
    left: 0px;
    position: absolute;
    top: -2px;
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.grey2};
    border-color: ${({ theme }) => theme.colors.grey4};
    color: ${({ theme }) => theme.colors.disabledLight};
  }
`;

// Props for Label
interface LabelProps {
  maxLabelWidth?: number;
}

// Label Styled Component
const Label = styled(LabelOrigin)<LabelProps>`
  font-size: ${({ theme }) => theme.fonts.normal};
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ maxLabelWidth }) =>
    maxLabelWidth &&
    `
		max-width: ${maxLabelWidth}px;
	`}
`;

interface CheckboxProps {
  name: string;
  control: Control<any>; // React Hook Form's control object
  label?: string;
  className?: string;
  disabled?: boolean;
  maxLabelWidth?: number;
  isRounded?: boolean;
  noMinWidth?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  control,
  label,
  className,
  disabled = false,
  maxLabelWidth,
  isRounded = false,
  noMinWidth = false,
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Wrapper
        className={className}
        hasLabel={!!label}
        middle={true}
        noMinWidth={noMinWidth}
      >
        <Input
          type="checkbox"
          {...field}
          disabled={disabled}
          hasLabel={!!label}
          isRounded={isRounded}
          onChange={(e) => field.onChange(e.target.checked)} // Ensures boolean value
        />
        {label && <Label maxLabelWidth={maxLabelWidth}>{label}</Label>}
      </Wrapper>
    )}
  />
);

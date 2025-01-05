import React from "react";
import styled from "styled-components";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register?: (name: string, options?: any) => any; // From react-hook-form
  validation?: Record<string, any>;
  error?: string;
}

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces8[1]};
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: ${({ theme }) => theme.spaces8[2]};
  height: ${({ theme }) => theme.spaces8[2]};
  border: 2px solid ${({ theme }) => theme.colors.borderDark};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: ${({ theme }) => theme.colors.parchment};
    border-color: ${({ theme }) => theme.colors.richBrown};

    &::after {
      content: "✔";
      color: ${({ theme }) => theme.colors.goldAccent};
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
    }
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.greyMuted};
    background-color: ${({ theme }) => theme.colors.greyLight};
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const ErrorMessage = styled.span`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.error};
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  register,
  validation,
  error,
  ...props
}) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox
        {...props}
        {...(register ? register(name, validation) : {})}
      />
      {label && <Label>{label}</Label>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CheckboxContainer>
  );
};

import React from "react";
import styled from "styled-components";
import { UseFormRegisterReturn } from "react-hook-form";
import { Flexbox } from "../Flexbox/Flexbox";
import { Error } from "../Typography/Typography";
import { InteractivePlaceholder } from "../InteractivePlaceholder";

// Type definitions for Input props
interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  register?: UseFormRegisterReturn;
  error?: any;
  disabled?: boolean;
  textField?: boolean;
  withoutErrorPadding?: boolean;
  flex?: boolean;
  value?: string;
  interactivePlaceholder?: string;
}

const Wrapper = styled(Flexbox)<{
  textField?: boolean;
  withoutErrorPadding?: boolean;
  flex?: boolean;
}>`
  padding-bottom: ${({ theme }) => theme.spaces8[3]};
  position: relative;
  ${({ textField }) =>
    textField &&
    `
    padding-top: 17px;
  `};
  ${({ withoutErrorPadding }) =>
    withoutErrorPadding &&
    `
    padding: unset;
  `};
`;

export const InputStyle = styled.input<{
  invalidBorder?: boolean;
  filled?: boolean;
}>`
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey1};
  color: white;
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.normal};
  outline: none;
  padding: 10px 0 10px 1px;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    ${({ invalidBorder, theme }) =>
      !invalidBorder && `border-bottom: 2px solid ${theme.colors.primaryBlue}`};
  }

  :focus {
    border-bottom: ${({ invalidBorder, theme }) =>
      invalidBorder
        ? `2px solid ${theme.colors.error}`
        : `2px solid ${theme.colors.primaryBlue}`};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.disabledLight};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.colors.disabledLight};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.disabledLight};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.colors.disabledLight};
  }

  ${({ invalidBorder, theme }) =>
    invalidBorder &&
    `
    border-bottom: 2px solid ${theme.colors.error};
  `};

  :disabled {
    color: ${({ theme }) => theme.colors.disabledLight};
  }

  :read-only {
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey1};
    ${({ filled, theme }) =>
      filled &&
      `
      border-bottom: 2px solid ${theme.colors.primaryBlue};
    `};
  }

  :-webkit-autofill,
  :-webkit-autofill:focus,
  :-webkit-autofill:active,
  :-webkit-autofill:hover {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  value,
  disabled = false,
  textField = false,
  withoutErrorPadding = false,
  flex = false,
  interactivePlaceholder,
  ...rest
}) => (
  <Wrapper
    column
    flex={flex}
    textField={textField}
    withoutErrorPadding={withoutErrorPadding}
  >
    {label && <label htmlFor={name}>{label}</label>}
    {interactivePlaceholder && (
      <InteractivePlaceholder
        shouldBeLabel={!!label}
        htmlFor={name}
        focused={focus}
      >
        {interactivePlaceholder}
      </InteractivePlaceholder>
    )}
    <InputStyle
      id={name}
      placeholder={placeholder}
      type={type}
      invalidBorder={!!error}
      disabled={disabled}
      filled={!error && !!value}
      {...register}
      {...rest}
    />
    {error && <Error>{error}</Error>}
  </Wrapper>
);

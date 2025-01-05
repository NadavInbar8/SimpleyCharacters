// TextInput.tsx
import React from "react";
import styled from "styled-components";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register?: (name: string, options?: any) => any;
  validation?: Record<string, any>;
  error?: any;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[1]};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces8[1]} ${theme.spaces8[2]}`};
  font-size: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderDark};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background-color: ${({ theme }) => theme.colors.parchmentLight};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.greyLight};
    color: ${({ theme }) => theme.colors.greyMuted};
    border-color: ${({ theme }) => theme.colors.greyMuted};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.greyMuted};
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

export const Input: React.FC<TextInputProps> = ({
  label,
  name,
  register,
  validation,
  error,
  ...props
}) => {
  return (
    <InputContainer>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        id={name}
        {...props}
        {...(register ? register(name, validation) : {})}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

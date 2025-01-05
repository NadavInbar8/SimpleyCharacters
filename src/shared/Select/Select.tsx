import React from "react";
import ReactSelect, { Props as ReactSelectProps } from "react-select";
import styled from "styled-components";

interface SelectInputProps extends ReactSelectProps {
  name: string;
  label?: string;
  register?: (name: string) => any; // react-hook-form's register function
  error?: any;
  control: any; // react-hook-form's control object
  validation?: Record<string, any>;
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[1]}px;
`;

const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const StyledError = styled.span`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.error};
`;

export const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  register,
  control,
  error,
  validation,
  ...props
}) => {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderColor: error ? "red" : base.borderColor,
      "&:hover": {
        borderColor: error ? "red" : base.borderColor,
      },
    }),
  };

  return (
    <SelectContainer>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <ReactSelect
        {...props}
        name={name}
        id={name}
        styles={customStyles}
        instanceId={name} // Required for accessibility when using React Select
      />
      {error && (
        <StyledError>
          {typeof error === "string" ? error : error.message}
        </StyledError>
      )}
    </SelectContainer>
  );
};

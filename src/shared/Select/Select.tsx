import React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";
import { Scrollbars } from "../Scrollable/Scrollbars";
import { SelectInputProps } from "./interfaces";

const SelectContainer = styled.div`
  position: relative;
  min-width: 100px;
  min-height: ${({ theme }) => theme.spaces8[8]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[1]};
  min-width: 200px;

  span {
    display: none;
  }
  .react-select__menu {
    background: ${({ theme }) => theme.colors.parchment};
    z-index: 2;
    color: ${({ theme }) => theme.colors.textPrimary};
    z-index: 5;
    ${Scrollbars}
  }
  .react-select__option {
    color: ${({ theme }) => theme.colors.richBrown};
    &:hover {
      background: ${({ theme }) => theme.colors.richBrown};
      color: ${({ theme }) => theme.colors.parchment};
      cursor: pointer;
    }
  }
  .react-select__option--is-focused {
    background: ${({ theme }) => theme.colors.richBrown};
    color: ${({ theme }) => theme.colors.parchment};
  }
  .react-select__option--is-selected {
    background: ${({ theme }) => theme.colors.goldAccent};
    color: ${({ theme }) => theme.colors.parchment};
  }
  .react-select__single-value {
    box-sizing: unset;
    margin: 0;
    padding: 0px;
  }
  .react-select__control {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderDark};
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    min-height: ${({ theme }) => theme.spaces8[5]};
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.goldAccent};
    }
    &:focus {
      border-color: ${({ theme }) => theme.colors.goldAccent};
    }
  }
  .react-select__placeholder {
    opacity: 0.5;
    padding-left: 1px;
  }
  .react-select__control--is-disabled div {
    color: ${({ theme }) => theme.colors.disabledLight};
  }
  .react-select__menu-list {
    ${Scrollbars};
    padding: unset;
  }
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
  return (
    <SelectContainer>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <ReactSelect
        {...props}
        name={name}
        id={name}
        classNamePrefix="react-select"
        instanceId={name}
      />
      {error && (
        <StyledError>
          {typeof error === "string" ? error : error.message}
        </StyledError>
      )}
    </SelectContainer>
  );
};

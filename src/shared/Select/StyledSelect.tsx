import React, { useCallback, useState } from "react";
import { Controller, Control, UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import { Error } from "../Typography/Typography";
import { Scrollbars } from "../Scrollable/Scrollbars";
import Select, { Props as ReactSelectProps } from "react-select";
import { InteractivePlaceholder } from "../InteractivePlaceholder";

// Define the option type
export interface Option {
  label: string | number;
  value: any;
}

// Define props for the Select component
interface SelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  error?: any;
  filled?: boolean;
  focused?: boolean;
  interactivePlaceholder?: string;
  register?: UseFormRegisterReturn;
}

interface ExtendedSelectProps extends ReactSelectProps<Option, false> {
  filled?: boolean;
  focused?: boolean;
}

// Base styled Select using styled-components
const BaseStyledSelect = styled(Select).attrs<ExtendedSelectProps>(() => ({
  classNamePrefix: "react-select",
}))<ExtendedSelectProps>`
  font-size: ${({ theme }) => theme.fonts.normal};
  outline: none;

  span {
    display: none;
  }

  .react-select__menu {
    background: ${({ theme }) => theme.colors.parchment};
    z-index: 2;
    color: ${({ theme }) => theme.colors.textPrimary};
    z-index: 5;

    ${Scrollbars}

    div {
      div {
        padding: 15px 15px;

        :hover {
          background: ${({ theme }) => theme.colors.parchmentLight};
          cursor: pointer;
        }
      }
    }
  }

  .react-select__option {
    color: ${({ theme }) => theme.colors.richBrown};
    &:hover {
      background: ${({ theme }) => theme.colors.goldActive};
      color: ${({ theme }) => theme.colors.parchment};

      cursor: pointer;
    }
  }

  .react-select__option--is-focused {
    background: ${({ theme }) => theme.colors.goldActive};
    color: ${({ theme }) => theme.colors.parchment};
  }

  .react-select__option--is-selected {
    background: ${({ theme }) => theme.colors.goldActive};
    color: ${({ theme }) => theme.colors.parchment};
  }

  .react-select__single-value {
    box-sizing: unset;
    margin: 0;
    padding: 10px;
    padding-left: 1px;
  }

  .react-select__control {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderDark};
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    min-height: 39px;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.goldAccent};
    }

    ${({ filled, theme }) =>
      filled &&
      `
      border-bottom: 2px solid ${theme.colors.borderDark};
    `}

    ${({ focused, theme }) =>
      focused &&
      `
      border-bottom: 2px solid ${theme.colors.goldAccent};
    `}

    div {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    :hover {
      border-color: ${({ theme }) => theme.colors.goldAccent};
    }

    :focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.goldAccent};
    }
  }

  .react-select__value-container {
    padding-left: 1px;
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
const Wrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  margin-top: ${({ theme }) => theme.spaces8[1]};
  min-width: 100px;
  padding-bottom: ${({ theme }) => theme.spaces8[3]};
`;

// Main StyledSelect Component
const StyledSelect: React.FC<SelectProps> = ({
  name,
  control,
  options,
  placeholder = "Select...",
  disabled = false,
  error,
  filled,
  focused,
  interactivePlaceholder,
}) => {
  const [shouldBeLabel, setShouldBeLabel] = useState(false);

  const handleFocus = useCallback(() => setShouldBeLabel(true), []);
  const handleBlur = useCallback((fieldBlur: () => void, value: any) => {
    setShouldBeLabel(!!value);
    fieldBlur();
  }, []);

  return (
    <Wrapper>
      {interactivePlaceholder && (
        <InteractivePlaceholder
          shouldBeLabel={shouldBeLabel}
          htmlFor={name}
          focused={focused}
        >
          {interactivePlaceholder}
        </InteractivePlaceholder>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <BaseStyledSelect
            {...field}
            options={options}
            placeholder={!interactivePlaceholder && placeholder}
            filled={filled}
            focused={focused}
            isDisabled={disabled}
            onChange={(value) => {
              field.onChange(value);
              setShouldBeLabel(true);
            }}
            onFocus={disabled ? undefined : handleFocus}
            onBlur={
              disabled ? undefined : () => handleBlur(field.onBlur, field.value)
            }
            value={field.value}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default StyledSelect;

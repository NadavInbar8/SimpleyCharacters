import React, { useCallback, useState } from "react";
import { Controller, Control } from "react-hook-form";
import styled from "styled-components";
import { Error } from "../Typography/Typography";
import { Scrollbars } from "../Scrollable/Scrollbars";
import Select, { Props as ReactSelectProps } from "react-select";
import { InteractivePlaceholder } from "../InteractivePlaceholder";

// Define the option type
export interface Option {
  label: string;
  value: string;
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
    background: ${({ theme }) => theme.colors.grey4};
    z-index: 2;
    color: ${({ theme }) => theme.colors.white};
    z-index: 5;

    div {
      div {
        padding: 15px 15px;

        :hover {
          background: ${({ theme }) => theme.colors.grey3};
          cursor: pointer;
        }
      }
    }
  }

  .react-select__option {
    &:hover {
      background: ${({ theme }) => theme.colors.blue3};
      cursor: pointer;
    }
  }

  .react-select__option--is-focused {
    background: ${({ theme }) => theme.colors.grey4};
  }

  .react-select__option--is-selected {
    background: ${({ theme }) => theme.colors.primaryBlue};
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
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey1};
    border-radius: 0;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    min-height: 39px;
    transition: all 0.2s ease-in-out;

    ${({ filled, theme }) =>
      filled &&
      `
      border-bottom: 2px solid ${theme.colors.grey1};
    `}

    ${({ focused, theme }) =>
      focused &&
      `
      border-bottom: 2px solid ${theme.colors.primaryBlue};
    `}

    div {
      color: ${({ theme }) => theme.colors.white};
    }

    :hover {
      border-color: ${({ theme }) => theme.colors.primaryBlue};
    }

    :focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBlue};
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
            placeholder={placeholder}
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

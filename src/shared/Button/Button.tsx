import { forwardRef } from "react";
import styled from "styled-components";
import { Flexbox } from "../Flexbox";
import { Icon as IconOrigin } from "../Icon";
import { ButtonProps } from "../interfaces";
import { ButtonWrapperProps } from "./interfaces";
import { BUTTON_ALIGNMENTS, BUTTON_SIZES, BUTTON_TYPES } from "./constants";

const Wrapper = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))<ButtonWrapperProps>`
  align-items: center;
  border-radius: 4px;
  border-width: 0;
  color: white;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: ${({ theme }) => theme.fonts.normal};
  outline: none;
  cursor: pointer;

  ${({ theme, size }) => {
    switch (size) {
      case BUTTON_SIZES.S:
        return `
          height: ${theme.spaces8[4]};
          min-width: ${theme.spaces8[10]};
          padding: 4px ${theme.spaces8[2]} 4px ${theme.spaces8[2]};
        `;
      case BUTTON_SIZES.M:
      default:
        return `
          height: ${theme.spaces8[5]};
          padding: 0px ${theme.spaces8[2]};
          min-width: ${theme.spaces8[15]};
        `;
    }
  }}

  ${({ ignoreMinWidth }) => ignoreMinWidth && "min-width: auto;"}

  ${({ alignment }) => {
    switch (alignment) {
      case BUTTON_ALIGNMENTS.left:
        return "justify-content: flex-start;";
      case BUTTON_ALIGNMENTS.right:
        return "justify-content: flex-end;";
      case BUTTON_ALIGNMENTS.center:
      default:
        return "justify-content: center;";
    }
  }}

  ${({ type, theme, active }) => {
    switch (type) {
      case BUTTON_TYPES.secondary:
        return `
          border: solid 1px ${theme.colors.primaryBlue};
          background-color: transparent;
          color: ${theme.colors.primaryBlue};
          &:hover {
            background-color: ${theme.colors.blue4}
          };
          &:active {
            background-color: ${theme.colors.blue3};
          };
         &:disabled{
            color: ${theme.colors.grey2};
            border: 1px solid ${theme.colors.grey2};
            cursor: default;
            &:hover{
              background-color: transparent;
            }
          }
        `;
      case BUTTON_TYPES.tertiary:
        return active
          ? `
            border: none;
            background-color: ${theme.colors.blue4};
            color: ${theme.colors.primaryBlue};
            padding: 4px ${theme.spaces8[1]};
        `
          : `
             border: none;
            border-radius: unset;
            background-color: transparent;
            color: ${theme.colors.primaryBlue};
            &:hover {
              color: ${theme.colors.blue2};
            }
            &:active {
              color: ${theme.colors.blue3};
            }
            &:disabled {
              cursor: default;
              color: ${theme.colors.grey2};
              ${Icon} {
                opacity: 0.5;
              };
            }
          `;
      case BUTTON_TYPES.primary:
      default:
        return `
          background-color: ${theme.colors.primaryBlue};
          &:hover {
            background-color: ${theme.colors.blue2};
          }
          &:active {
            background-color: ${theme.colors.blue3};
          }
          &:disabled {
            color: ${theme.colors.grey2};
            background-color: unset;
            background-color: ${theme.colors.grey4};
          }
        `;
    }
  }}

  ${({ warning, theme }) =>
    warning &&
    `
     border: solid 1px ${theme.colors.warning};
      background-color: transparent;
      color: ${theme.colors.warning};
      &:hover {
        background-color: ${theme.colors.warning3};
      };
      &:active {
        background-color: ${theme.colors.warning2};
      };
      &:disabled {
        color: ${theme.colors.grey2};
        border: 1px solid ${theme.colors.grey2};
        background-color: unset;
        cursor: default;
      };
  `}

${({ error, theme }) =>
    error &&
    `
      border: solid 1px ${theme.colors.error};
      background-color: transparent;
      color: ${theme.colors.error};
      &:hover {
        background-color: ${theme.colors.error3};
      }
      &:active {
        background-color: ${theme.colors.error2};
      }
      &:disabled {
        color: ${theme.colors.grey2};
        border: 1px solid ${theme.colors.grey2};
        background-color: unset;
        cursor: default;
      }
    `};
`;
const Text = styled.div``;

const Icon = styled(IconOrigin)`
  margin-right: ${({ theme }) => theme.spaces8[1]};
`;

const Button = ({
  children,
  icon,
  iconType,
  iconProps = {},
  forwardRef,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper ref={forwardRef} {...props} disabled={disabled}>
      <Flexbox middle>
        {icon && (
          <Icon
            src={icon}
            type={iconType ?? ""}
            size={iconProps.size ?? 16}
            {...iconProps}
          />
        )}
        <Text>{children}</Text>
      </Flexbox>
    </Wrapper>
  );
};

const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button {...props} forwardRef={ref} />
);

export { ButtonWithRef as Button };

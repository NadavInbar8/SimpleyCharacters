import styled from "styled-components";

interface PlaceholderProps {
  shouldBeLabel?: boolean;
  shouldShow?: boolean;
}

const Placeholder = styled.label<PlaceholderProps>`
  color: ${({ theme }) => theme.colors.grey1};
  font-size: ${({ theme }) => theme.fonts.normal4};
  left: 1px;
  pointer-events: none;
  position: absolute;
  top: 8px;
  ${({ shouldBeLabel, theme }) =>
    shouldBeLabel &&
    `
    left: 0px;
    top: -8px;
    color: ${theme.colors.goldAccent};
  `};
  ${({ shouldShow }) =>
    !shouldShow &&
    `
    opacity: 0;
  `};
  transition: all ease-in-out 0.2s;
`;

interface InteractivePlaceholderProps extends PlaceholderProps {
  children: React.ReactNode;
  htmlFor?: string;
  [key: string]: any; // To allow additional props
}

export const InteractivePlaceholder: React.FC<InteractivePlaceholderProps> = ({
  shouldBeLabel,
  shouldShow = true,
  children,
  htmlFor,
  ...rest
}) => (
  <Placeholder
    shouldBeLabel={shouldBeLabel}
    shouldShow={shouldShow}
    htmlFor={htmlFor}
    {...rest}
  >
    {children}
  </Placeholder>
);

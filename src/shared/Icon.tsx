import styled, { keyframes, css } from "styled-components";
import { IconProps, IProps } from "./interfaces";

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const blink = keyframes`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
`;

const rotation = css`
  animation: ${rotate} 2s linear infinite;
`;

const blinking = css`
  animation: ${blink} 1s ease infinite;
`;

type WrapperProps = Omit<
  IconProps,
  "src" | "type" | "alt" | "active" | "hoverColor"
>;

const Wrapper = styled.div<WrapperProps>`
  ${({ onClick, theme }) =>
    onClick &&
    `
		cursor: pointer;
		&:hover {
			color: ${theme.colors.white};
		}
	`};
  ${({ spin }) => spin && rotation};
  ${({ blink }) => blink && blinking};
  align-items: center;
  display: flex;
  ${({ center }) => center && "justify-content: center;"};
`;

const I = styled.i<IProps>`
  ${({ size }) => size && `font-size: ${size}rem`};
  ${({ color }) => color && `color: ${color};`};
  ${({ withStates }) =>
    withStates &&
    `
		position: relative;
		z-index: 0;
    &::before {
      z-index: -1;
      content: ' ';
      position: absolute;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      background-color: transparent;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `};
  &:hover {
    ${({ hoverColor }) => hoverColor && `color: ${hoverColor};`};
    ${({ withStates, theme }) =>
      withStates &&
      `
			&::before {
				background-color: ${theme.colors.grey4};
			}
		`};
  }

  ${({ withStates, active, theme }) =>
    withStates &&
    active &&
    `
		color: ${theme.colors.primaryBlue};
		&::before {
			background-color: ${theme.colors.blue4};
		}
	`};
`;

export const Icon = ({
  src,
  type = "material",
  size,
  color,
  hoverColor,
  withStates,
  center = true,
  spin = false,
  blink = false,
  className,
  onClick,
  alt = "",
  ...rest
}: IconProps) => (
  <Wrapper
    center={center}
    spin={spin || ["loop", "sync"].indexOf(src) !== -1}
    blink={blink}
    className={className}
    withStates={withStates}
    onClick={onClick}
    size={size} // Explicitly pass size
    color={color} // Explicitly pass color
    {...rest} // Spread remaining valid props
  >
    {type === "img" && (
      <img src={`/assets/icons-v2/${src}`} width={size} alt={alt} />
    )}
    {type === "material" && (
      <I
        className={"material-symbols-outlined"}
        size={size}
        color={color}
        hoverColor={hoverColor}
        withStates={withStates}
        active={rest.active}
        alt={alt}
      >
        {src}
      </I>
    )}
  </Wrapper>
);

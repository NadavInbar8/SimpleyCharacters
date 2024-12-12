import React from "react";
import styled from "styled-components";
import { CardProps } from "./interfaces";
import { Flexbox } from "..";

interface WrapperProps {
  col?: number;
  noBackground?: boolean;
  noPadding?: boolean;
  noMargin?: boolean;
  column?: boolean;
  className?: string;
}

const Wrapper = styled(Flexbox)<WrapperProps>`
  color: ${({ theme }) => theme.colors.white};
  ${({ noBackground, theme }) =>
    !noBackground &&
    `
    border: 1px solid ${theme.colors.grey2};
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    background-color: ${theme.colors.blue5};
  `};

  flex: ${({ col }) => col};
  overflow: hidden;
  position: relative;

  ${({ noPadding, theme }) => !noPadding && `padding: ${theme.spaces8[2]};`}
  ${({ noMargin, theme }) => !noMargin && `margin: ${theme.spaces8[2]};`}
`;

export const Card: React.FC<CardProps> = ({
  col = 1,
  column = true,
  noBackground = false,
  noPadding = false,
  noMargin = true,
  children,
}) => (
  <Wrapper
    col={col}
    column={column}
    noPadding={noPadding}
    noMargin={noMargin}
    noBackground={noBackground}
  >
    {children}
  </Wrapper>
);

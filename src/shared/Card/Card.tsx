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
  color: ${({ theme }) => theme.colors.textPrimary};
  ${({ noBackground, theme }) =>
    !noBackground &&
    `
    border: 1px solid ${theme.colors.grey2};
    border-radius: 4px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    background-color: ${theme.colors.blue5};
  `};
  flex: ${({ col }) => col};
  background-color: ${({ theme }) =>
    theme.colors.cardBackground}; /* Darker parchment */
  border: 1px solid ${({ theme }) => theme.colors.borderDark}; /* Darker border for contrast */
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow for lift */
  overflow: hidden;
  position: relative;
  padding: ${({ noPadding, theme }) => (noPadding ? "0" : theme.spaces8[2])};
  margin: ${({ noMargin, theme }) => (noMargin ? "0" : theme.spaces8[2])};
`;

export const Card: React.FC<CardProps> = ({
  col = 1,
  column = true,
  noBackground = false,
  noPadding = false,
  noMargin = false,
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

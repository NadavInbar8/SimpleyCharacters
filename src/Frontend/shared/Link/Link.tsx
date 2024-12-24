import React from "react";
import styled from "styled-components";
import { Link as RouterLink, LinkProps } from "react-router";
interface CustomLinkProps extends LinkProps {
  isActive?: boolean; // Prop to indicate active state
}

// Styled Link Component
const StyledLink = styled(RouterLink)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.richBrown : "transparent"};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBrown};
    color: ${({ theme }) => theme.colors.goldAccent};
    cursor: pointer;
  }

  /* Optional: Add an icon next to the link text */
  i {
    margin-right: ${({ theme }) => theme.spaces8[1]};
    color: ${({ theme }) => theme.colors.goldAccent};
  }
`;

// The Link Component
export const Link: React.FC<CustomLinkProps> = ({
  children,
  isActive = false,
  ...rest
}) => {
  return (
    <StyledLink isActive={isActive} {...rest}>
      {children}
    </StyledLink>
  );
};

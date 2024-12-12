import styled from "styled-components";
import { Flexbox } from "../Flexbox/Flexbox";
import { Link } from "../Link";
import { ReactNode } from "react";

const Wrapper = styled(Flexbox)`
  width: 100%;
  height: ${({ theme }) => theme.spaces8[3]};
  font-size: ${({ theme }) => theme.fonts.normal};
  padding: ${({ theme }) => theme.spaces8[2]};
  border-bottom: 1px solid ${({ theme }) => theme.colors};
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue6};
  }
`;

interface MenuItem {
  children: ReactNode;
  link: string;
  preIcon?: string;
}

export const MenuItem = ({ children, link, preIcon }: MenuItem) => {
  return (
    <Link to={link}>
      {preIcon && <img src={preIcon} />}
      <Wrapper middle>{children}</Wrapper>
    </Link>
  );
};

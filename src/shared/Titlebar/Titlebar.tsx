import React from "react";
import { TitlebarProps } from "./interfaces";
import styled from "styled-components";
import { Flexbox } from "../Flexbox/Flexbox";
import { BUTTON_SIZES, BUTTON_TYPES } from "../Button/constants";
import { SectionTitle } from "../Titles/Titles";

const Wrapper = styled(Flexbox)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue5};
  max-height: ${({ theme }) => theme.spaces8[3]};
  padding: ${({ theme }) => theme.spaces8[2]} ${({ theme }) => theme.spaces8[4]};
  position: relative;
  &::after {
    background: ${({ theme }) => theme.colors.grey2};
    bottom: 0;
    content: " ";
    height: 1px;
    left: -${({ theme }) => theme.spaces8[2]};
    padding-right: calc(32px - 1px);
    position: absolute;
    width: 100%;
  }
`;

const LeftSideHolder = styled(Flexbox)`
  align-items: center;
  width: 50%;
`;

const RightSideHolder = styled(Flexbox)`
  align-items: center;
  gap: ${({ theme }) => theme.spaces8[1]};
  justify-content: flex-end;
  width: 50%;
`;

export const Titlebar = ({ children }: TitlebarProps) => {
  const title = React.Children.map(children, (title, i) => {
    if (i === 0) return title;
    return null;
  });
  const buttons = React.Children.map(children, (button, i) => {
    if (i !== 0 && React.isValidElement(button))
      return React.cloneElement(button, {
        type: BUTTON_TYPES.secondary,
        ...button.props,
        size: BUTTON_SIZES.S,
      });
    return null;
  });

  return (
    <Wrapper between baseline>
      <LeftSideHolder>
        <SectionTitle>{title}</SectionTitle>
      </LeftSideHolder>
      <RightSideHolder>{buttons}</RightSideHolder>
    </Wrapper>
  );
};

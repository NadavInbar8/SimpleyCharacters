import React from "react";
import styled from "styled-components";
import { Flexbox } from "../index";
import { PageContainerProps } from "./interfaces";

export const PageWrapper = styled(Flexbox)`
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[3]};
`;

export const PageContainer = ({ children }: PageContainerProps) => {
  const Titlebar = React.Children.map(children, (title, i) => {
    if (i === 0) return title;
    return null;
  });

  const Content = React.Children.map(children, (child, i) => {
    if (i === 0) return null;
    return child;
  });
  return (
    <PageWrapper>
      {Titlebar}
      {Content}
    </PageWrapper>
  );
};

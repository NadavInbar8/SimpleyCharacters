import { ThemeProvider } from "styled-components";
import { GlobalCSS, theme } from "../theme.ts";
import styled from "styled-components";
import { Flexbox, Sidebar } from "../shared";
import { LayoutProps } from "./interface.ts";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.parchment};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const SideBarAndMainWrapper = styled(Flexbox)`
  flex: 2;
  overflow-y: hidden;
`;

const Main = styled(Flexbox)`
  flex: 1;
  overflow: hidden;
`;

const Content = styled(Flexbox)`
  flex: 1;
  overflow: hidden;
  /* padding: 0px 28px 34px 34px; */
`;

const ChildrenContent = styled(Flexbox)`
  flex: 1;
  overflow: hidden;

  & > div {
    flex: 1;
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Wrapper>
        <SideBarAndMainWrapper>
          <Sidebar />
          <Main column={true}>
            <Content column={true}>
              <ChildrenContent>{children}</ChildrenContent>
            </Content>
          </Main>
        </SideBarAndMainWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

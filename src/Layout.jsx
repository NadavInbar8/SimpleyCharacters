import { ThemeProvider } from "styled-components";
import { GlobalCSS, theme } from "./theme";
import styled from "styled-components";
import { Flexbox, Sidebar } from "./shared";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue6};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 1400px;
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

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Wrapper column={true}>
        <SideBarAndMainWrapper>
          <Sidebar />
        </SideBarAndMainWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

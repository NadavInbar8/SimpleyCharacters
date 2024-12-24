import { Flexbox } from "../Flexbox/Flexbox";
import styled from "styled-components";
import { MainMenu } from "./MainMenu";
import { Button as ButtonOrigin } from "../Button/Button";
import { BUTTON_TYPES } from "../Button/constants";

const Logo = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces8[5]};
  padding-left: ${({ theme }) => theme.spaces8[2]};
  font-size: ${({ theme }) => theme.fonts.big};
`;

const Wrapper = styled(Flexbox)`
  background-color: ${({ theme }) => theme.colors.background2};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-right: 1px solid ${({ theme }) => theme.colors.grey2};
  box-sizing: border-box;
  flex: 1;
  font-size: ${({ theme }) => theme.fonts.normal};
  max-width: 240px;
  padding: ${({ theme }) => theme.spaces8[3]} ${({ theme }) => theme.spaces8[2]};
  width: 240px;
  gap: ${({ theme }) => theme.spaces8[2]};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
`;

const Button = styled(ButtonOrigin)`
  border-radius: ${({ theme }) => theme.spaces8[3]};
`;

export const Sidebar = () => {
  return (
    <Wrapper column={true}>
      <Logo>Simple Characters</Logo>
      <Button>Create Character</Button>
      <Button type={BUTTON_TYPES.secondary}>Create Character</Button>
      <Button type={BUTTON_TYPES.tertiary}>Create Character</Button>
      <MainMenu />
    </Wrapper>
  );
};

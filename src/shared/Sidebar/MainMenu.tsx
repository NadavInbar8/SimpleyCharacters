import styled from "styled-components";
import { Flexbox } from "../Flexbox/Flexbox";
import { MenuItem } from "./MenuItem";

const Wrapper = styled(Flexbox)`
  width: 100%;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.spaces8[2]};
`;

export const MainMenu = () => {
  return (
    <Wrapper column>
      <MenuItem link="/">Homepage</MenuItem>
      <MenuItem link="/Wizard">Wizard</MenuItem>
      <MenuItem link="/3">Item 3</MenuItem>
    </Wrapper>
  );
};

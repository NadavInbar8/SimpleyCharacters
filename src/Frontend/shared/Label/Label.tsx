import styled from "styled-components";

export interface LabelProps {
  inheritColor?: boolean;
  maxLabelWidth?: number;
}

export const Label = styled.label<LabelProps>`
  color: ${({ inheritColor, theme }) =>
    inheritColor ? "inherit" : theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.normal4};
`;

export const BlueLabel = styled(Label)`
  color: ${({ theme }) => theme.colors.primaryBlue};
`;

export const BigLabel = styled(Label)`
  font-size: ${({ theme }) => theme.fonts.normal8};
`;

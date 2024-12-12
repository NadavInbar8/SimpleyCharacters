import styled, { css } from "styled-components";

interface TextProps {
  margin?: string;
  textAlign?: string;
  fontWeight?: number | string;
}

const common = css<TextProps>`
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 500;
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
`;

export const Title = styled.h1<TextProps>`
  ${common};
  font-size: 4rem;
`;

export const SubTitle = styled.h2<TextProps>`
  ${common};
  font-size: 3rem;
`;

export const SectionTitle = styled.h3<TextProps>`
  font-size: ${({ theme }) => theme.fonts.big};
  margin: 0;
  ${common};
`;

export const SubSectionTitle = styled.div<TextProps>`
  font-size: ${({ theme }) => theme.fonts.normal8};
  font-weight: 400;
  margin-bottom: 15px;
`;

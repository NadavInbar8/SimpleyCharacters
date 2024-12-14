import styled from "styled-components";

export const Error = styled.span`
  bottom: 0px;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.small};
  height: 14px;
  left: 0px;
  position: absolute;
`;

export const ErrorDiv = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts.small};
  margin-top: ${({ theme }) => theme.spaces8[2]};
  text-align: center;
`;

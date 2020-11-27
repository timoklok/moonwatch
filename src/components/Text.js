import theme from "../theme/theme";
import styled, { css } from "styled-components";

export const baseText = css`
  font-family: ${theme.fonts.mainFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 900;
`;

export const mediumText = css`
  font-family: ${theme.fonts.mainFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 400;
`;

export const subText = css`
  font-family: ${theme.fonts.subFont};
  color: ${theme.textColor};
  font-weight: 100;
`;

export const Title = styled.h1`
  ${baseText};
  /* letter-spacing: 2rem; */
  font-size: ${theme.fontSizes.xl};
`;

export const Header = styled.h2`
  ${baseText};
  letter-spacing: 0.5rem;
  font-size: ${theme.fontSizes.l};
`;

export const Description = styled.p`
  ${mediumText};
  letter-spacing: 0.3rem;
  text-align: center;
`;

import theme from "../theme/theme";
import styled, { css } from "styled-components";
import mq from "../utils/mq";

export const baseText = css`
  font-family: ${theme.fonts.mainFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 900;
  letter-spacing: 0.2rem;
`;

export const mediumText = css`
  font-family: ${theme.fonts.mainFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 500;
`;

export const subText = css`
  font-family: ${theme.fonts.subFont};
  font-style: italic;
  color: ${theme.textColor};
  font-weight: 100;
`;

export const Title = styled.h1`
  ${baseText};
  letter-spacing: 2rem;
  font-size: 2rem;
  max-width: 100%;
  word-wrap: break-word;
  text-align: center;
  text-indent: 1rem;
  margin-left: 2rem;
  ${mq.medium`
    text-indent: 0rem;
    margin-left: 0rem;
    font-size: ${theme.fontSizes.xl};
   `}
`;

export const Header = styled.h2`
  ${baseText};
  letter-spacing: 0.5rem;
  font-size: ${theme.fontSizes.l};
`;

export const Description = styled.div`
  ${mediumText};
  font-size: ${theme.fontSizes.sm};
  letter-spacing: 0.3rem;
  text-align: center;
`;

export const Kicker = styled.div`
  ${mediumText};
  font-size: ${theme.fontSizes.xs};
  letter-spacing: 0.3rem;
  text-align: center;
  line-height: 1.8;
  span {
    display: none;
  }
  a {
    display: block;
  }
  ${mq.medium`
  span{ display:inline;}
  a {
    display:inline;
  }
   `}
`;

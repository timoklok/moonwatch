import theme from "../theme/theme";
import styled, { css } from "styled-components";
import mq from "../utils/mq";
import { motion } from "framer-motion";

export const baseTitle = css`
  font-family: ${theme.fonts.headerFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 700;
  letter-spacing: 0.1rem;
`;

export const mediumTitle = css`
  font-family: ${theme.fonts.mainFont};
  text-transform: uppercase;
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 700;
  letter-spacing: 0.1rem;
`;

export const baseText = css`
  font-family: ${theme.fonts.mainFont};
  /* text-transform: uppercase; */
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 700;
  /* letter-spacing: 0.1rem; */
`;

export const mediumText = css`
  font-family: ${theme.fonts.mainFont};
  /* text-transform: uppercase; */
  color: ${theme.textColor};
  font-size: ${theme.fontSizes.m};
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

export const subText = css`
  font-family: ${theme.fonts.subFont};
  font-style: italic;
  color: ${theme.textColor};
  font-weight: 100;
`;

export const SiteTitle = styled(motion.h1)`
  ${baseText};
  text-transform: uppercase;
  letter-spacing: 2rem;
  font-size: 2rem;
  max-width: 100%;
  word-wrap: break-word;
  text-align: center;
  text-indent: 1rem;
  margin-left: 2rem;
  filter: none;
  ${mq.medium`
    text-indent: 0rem;
    margin-left: 0rem;
    font-size: ${theme.fontSizes.xl};
   `}
`;

export const Header = styled.h2`
  ${baseTitle};
  letter-spacing: 0.5rem;
  font-size: ${theme.fontSizes.l};
`;

export const Description = styled.div`
  ${mediumText};
  font-size: ${theme.fontSizes.sm};
  letter-spacing: 0.1rem;
  text-align: center;
`;

export const Kicker = styled(motion.div)`
  ${mediumText};
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSizes.xs};
  letter-spacing: 0.15rem;
  text-align: center;
  line-height: 1.4;
  max-width: 350px;
  min-width: 300px;
  padding: 0 16px;
  filter: none;
  img {
    width: 250px;
  }

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

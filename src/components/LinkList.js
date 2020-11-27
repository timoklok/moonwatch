import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { baseText, subText } from "../components/Text";
import theme from "../theme/theme";

const LinkListWrapper = styled.div`
  padding: 0 40px;
  margin-bottom: 40px;
`;

const LinkListHeader = styled.h3`
  ${subText};
  margin-top: 0;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
`;

const Link = styled.a`
  ${baseText};
  text-decoration: none;
  letter-spacing: 0.2rem;
  font-size: ${theme.fontSizes.m};

  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.span`
  height: 100%;
  left: 5px;
  position: relative;
  svg {
    width: 24px;
  }
`;

const LinkList = ({ title, links, ...props }) => {
  return (
    <LinkListWrapper>
      <LinkListHeader>{title}</LinkListHeader>
      <Ul>
        {links.map((link, i) => (
          <Li key={i}>
            <Link href={link.url}>
              {" "}
              {link.name}
              <Arrow>
                <svg
                  viewBox="0 0 38 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807611 25.9792 0.807611 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM0 13.5H36V10.5H0V13.5Z"
                    fill="white"
                  />
                </svg>
              </Arrow>
            </Link>
          </Li>
        ))}
      </Ul>
    </LinkListWrapper>
  );
};

LinkList.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default LinkList;

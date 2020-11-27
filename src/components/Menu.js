import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { baseText, subText } from "../components/Text";

const MenuContainer = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
`;

const Hamburger = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  width: 50px;
  height: 50px;
  svg {
    stroke: white;
    fill: white;
  }
`;

const MenuItems = styled.nav`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const MenuItem = styled.a`
  display: block;
  cursor: pointer;
  ${baseText};
`;

const items = ["home", "watch", "listen", "contact"];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      <MenuContainer>
        <Hamburger onClick={toggleMenu} visible={!menuOpen}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="70" height="10"></rect>
            <rect y="20" width="70" height="10"></rect>
            <rect y="40" width="70" height="10"></rect>
          </svg>
        </Hamburger>
        <MenuItems visible={menuOpen}>
          {items.map((x, i) => {
            return (
              <MenuItem href={`#${x}`} key={i} onClick={toggleMenu}>
                {x}
              </MenuItem>
            );
          })}
        </MenuItems>
      </MenuContainer>
    </>
  );
};

Menu.propTypes = {
  id: PropTypes.string,
};

export default Menu;

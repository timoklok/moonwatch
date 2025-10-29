import React from "react";
import styled from "styled-components";
import { subText } from "../components/Text";

const ReleaseContainer = styled.button`
  background: none;
  border: 0;
  padding: 0;
  width: 260px;
  text-align: left;
  margin: 20px;
  ${subText};
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const Release = ({ img, txt, clickHandler }) => {
  return (
    <>
      <ReleaseContainer onClick={clickHandler}>
        <img alt={txt} src={`./images/${img}`} />
        <span>{txt}</span>
      </ReleaseContainer>
    </>
  );
};

export default Release;

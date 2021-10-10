import React from "react";
import styled from "styled-components";
import { subText } from "../components/Text";

const ReleaseContainer = styled.div`
  width: 260px;
  text-align: left;
  margin: 20px;
  ${subText};

  img {
    width: 100%;
  }
`;

const Release = ({ img, txt }) => {
  return (
    <>
      <ReleaseContainer>
        <img alt={txt} src={`./images/${img}`} />
        <span>{txt}</span>
      </ReleaseContainer>
    </>
  );
};

export default Release;

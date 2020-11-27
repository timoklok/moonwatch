import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { subText } from "../components/Text";

const VideoContainer = styled.div`
  text-align: left;
  align-self: flex-end;
  margin: 50px;
  &:nth-of-type(even) {
    align-self: flex-start;
  }
`;

const VideoName = styled.p`
  ${subText}
  margin-top: 0;
  font-size: 1.2rem;
`;

const Video = ({ id = "_4CoUa-4DNQ", name = "Reaper" }) => {
  return (
    <VideoContainer>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <VideoName>{name}</VideoName>
    </VideoContainer>
  );
};

Video.propTypes = {
  id: PropTypes.string,
};

export default Video;

import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { subText } from "../components/Text";

import mq from "../utils/mq";

const VideoWrapper = styled.div`
  align-self: center;
  margin: 10vh 0;
  text-align: left;
  align-self: flex-end;
  width: 100%;

  position: relative;

  ${mq.medium`
    width: 400px;
   `}

  ${mq.large`
    width: 608px;
   `}
  &:nth-of-type(even) {
    align-self: flex-start;
  }

  ${mq.medium`
    margin: 15vh 0;
   `}
`;

const VideoContainer = styled.div`
  position: relative;
  &:before {
    content: "";
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 56.25%;
  }

  &:after {
    /* to clear float */
    content: "";
    display: table;
    clear: both;
  }
`;

const VideoName = styled.p`
  ${subText}
  margin-top: 0;
  font-size: 1.2rem;
`;

const Teaser = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: pink;
  cursor: pointer;
`;

const Video = ({ id = "_4CoUa-4DNQ", name = "Reaper" }) => {
  const [hasClicked, setHasClicked] = useState(false);
  const clickHandler = () => setHasClicked(true);
  return (
    <VideoWrapper>
      <VideoContainer>
        {!hasClicked && <Teaser onClick={clickHandler} />}
        {hasClicked && (
          <iframe
            title={`${name} on Youtube`}
            width="100%"
            height="100%"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        )}
      </VideoContainer>
      <VideoName>{name}</VideoName>
    </VideoWrapper>
  );
};

Video.propTypes = {
  id: PropTypes.string,
};

export default Video;

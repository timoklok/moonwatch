import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { subText } from "../components/Text";
import YouTube from "react-youtube";

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
  background-color: black;
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

  iframe {
    height: 100%;
    position: absolute;
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
  cursor: pointer;
  background-color: black;
  background-image: url(${(props) => props.still});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    polygon,
    path {
      fill: #ffffff;
      opacity: 1;
      transform-origin: center center;
      transform: scale(1.06);
    }
  }
`;

const PlayButton = styled.div`
  width: 15%;
  height: auto;

  polygon,
  path {
    transition: 0.3s;
    fill: #ffffff;
    opacity: 0.8;
  }
`;

const Video = ({
  still = "deimos.png",
  id = "_4CoUa-4DNQ",
  name = "Reaper",
}) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const [hasClicked, setHasClicked] = useState(false);
  const clickHandler = () => {
    setHasClicked(true);
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.play();
  };

  return (
    <VideoWrapper>
      <VideoContainer>
        {!hasClicked && (
          <Teaser
            className={`player-${id}`}
            still={`./images/${still}`}
            onClick={clickHandler}
          >
            <PlayButton>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
              </svg>
            </PlayButton>
          </Teaser>
        )}
        {hasClicked && <YouTube videoId={id} opts={opts} onReady={_onReady} />}
      </VideoContainer>
      <VideoName>{name}</VideoName>
    </VideoWrapper>
  );
};

Video.propTypes = {
  id: PropTypes.string,
};

export default Video;

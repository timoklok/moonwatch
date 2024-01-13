import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { SiteTitle, Kicker } from "../components/Text";
import Form from "../components/Form";
import ViewBox from "../components/ViewBox";

import {
  motion,
  useTransform,
  useViewportScroll,
  useMotionTemplate,
  animate,
} from "framer-motion";

const TitleContainer = styled(motion.div)`
  margin: 0vh 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled(motion.div)`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    transform: rotate(90deg);
  }
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin-top: 40px;
  text-align: center;
`;

const KickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Home = () => {
  const { scrollY } = useViewportScroll();
  const [titleTop, setTitleTop] = useState(0);
  const titleRef = useRef(null);
  const arrowRef = useRef(null);
  //const blurAmount = useTransform(scrollY, [0, titleTop + 400], [0, 5]);
  const blurAmount = useTransform(scrollY, [0, titleTop + 400], [0, 0]);
  const arrowOpacityAmount = useTransform(scrollY, [100, 200], [1, 0]);

  // get Title offset on scroll
  useLayoutEffect(() => {
    const element = titleRef.current;
    setTitleTop(element.offsetTop);
  }, [titleRef]);

  useEffect(() => {
    const controls = animate(blurAmount, 0, {
      type: "tween",
      duration: 2,
      onComplete: (v) => {},
    });
    return controls.stop;
  });

  const titleBlur = useMotionTemplate`blur(${blurAmount}px`;

  return (
    <ViewBox id="home">
      <TitleContainer ref={titleRef}>
        <SiteTitle style={{ filter: titleBlur }}>
          Moon
          <wbr />
          watch
        </SiteTitle>
        <KickerContainer>
          <Kicker style={{ filter: titleBlur }}>
            <a title="Listen to Myriad Eyes \ Myriad Other" href="#listen">
              <img
                alt="Myriad Eyes \ Myriad Other Album cover"
                src="images/MYMO-cover.png"
              />
            </a>
            <p>
              Our first album 'Myriad eyes \ Myriad Other' is out now!
              <br />
              <a href="#listen">Listen</a>
            </p>
          </Kicker>
          <Kicker style={{ filter: titleBlur }}>
            <a
              title="Album release tickets and info"
              href="https://www.denijverheid.org/agenda/3079-dubbele-album-release-show-thistle-sifter-moonwatch"
            >
              <img
                alt="Album release poster"
                src="images/album-release-v2.jpg"
              />
            </a>
            <p>
              On Saturday January 27th, we'll celebrate the release of our first
              album 'Myriad eyes \ Myriad Other' with a show at De Nijverheid,
              Utrecht.
              <br />
              <a href="https://www.denijverheid.org/agenda/3079-dubbele-album-release-show-thistle-sifter-moonwatch">
                Tickets and info
              </a>
            </p>
          </Kicker>
        </KickerContainer>
        <FormContainer>
          <Form formText="Leave your email to occasionally receive emails about new releases and live shows:" />
        </FormContainer>
      </TitleContainer>
      <Arrow ref={arrowRef} style={{ opacity: arrowOpacityAmount }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z"
          />
        </svg>
      </Arrow>
    </ViewBox>
  );
};

Home.propTypes = {};

export default Home;

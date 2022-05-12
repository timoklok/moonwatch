import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { Title, Kicker } from "../components/Text";
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
  filter: blur(4px);
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

const Home = () => {
  const { scrollY } = useViewportScroll();
  const [titleTop, setTitleTop] = useState(0);
  const titleRef = useRef(null);
  const arrowRef = useRef(null);
  const blurAmount = useTransform(scrollY, [0, titleTop], [0, 5]);

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
      <TitleContainer style={{ filter: titleBlur }} ref={titleRef}>
        <Title>
          Moon
          <wbr />
          watch
        </Title>
        <Kicker>
          <a title="listen to Kármán Line" href="#listen">
            <img alt="Kármán Line cover" src="images/karman-line.jpg" />
          </a>
          <p>
            new EP 'Kármán Line' <span>-</span> <a href="#listen">out now</a>
          </p>
        </Kicker>
        <FormContainer>
          <Form formText="leave your email to occasionally receive emails about new releases and live shows:" />
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

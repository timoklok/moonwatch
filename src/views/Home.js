import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { Title, Description, Kicker } from "../components/Text";
import ViewBox from "../components/ViewBox";

import {
  motion,
  useTransform,
  useViewportScroll,
  useMotionTemplate,
  animate,
} from "framer-motion";

const MainDescription1 = styled(Description)`
  width: min(40%, 65ch);
  align-self: flex-start;
  text-align: left;
  margin: 5vh 0;
`;

const MainDescription2 = styled(Description)`
  width: min(40%, 65ch);
  align-self: flex-end;
  text-align: right;
  margin-bottom: 5vh;
  div {
    margin-bottom: 20px;
  }
`;

const TitleContainer = styled(motion.div)`
  margin: 30vh 0;
  filter: blur(4px);
  text-align: center;
`;

const FullContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const { scrollY } = useViewportScroll();
  const windowHeight = window.innerHeight;

  const [titleTop, setTitleTop] = useState(0);
  const titleRef = useRef(null);
  const blurAmount = useTransform(scrollY, [0, titleTop], [0, 5]);

  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const description3Ref = useRef(null);
  const [description1Scroll, setDescription1Scroll] = useState(0);
  const [description2Scroll, setDescription2Scroll] = useState(0);
  const [description3Scroll, setDescription3Scroll] = useState(0);

  const opacity1 = useTransform(
    scrollY,
    [description1Scroll + 200, windowHeight / 2 + description1Scroll],
    [0, 1]
  );
  const descriptionBlurAmount1 = useTransform(
    scrollY,
    [description1Scroll + 200, windowHeight / 2 + description1Scroll],
    [3, 0]
  );

  const lineheight1Amount = useTransform(
    scrollY,
    [description1Scroll + 200, windowHeight / 2 + description1Scroll],
    [150, 120]
  );

  const y1 = useTransform(
    scrollY,
    [description1Scroll, description1Scroll + 1],
    [0.1, -0.25],
    { clamp: false }
  );
  const y2 = useTransform(
    scrollY,
    [description2Scroll, description2Scroll + 1],
    [-0.2, -0.27],
    { clamp: false }
  );

  const y3 = useTransform(
    scrollY,
    [description3Scroll, description3Scroll + 1],
    [-0.2, -0.27],
    { clamp: false }
  );

  const opacity2 = useTransform(
    scrollY,
    [description2Scroll + 200, windowHeight / 2 + description2Scroll],
    [0, 1]
  );
  const descriptionBlurAmount2 = useTransform(
    scrollY,
    [description2Scroll + 200, windowHeight / 2 + description2Scroll],
    [3, 0]
  );
  const lineheight2Amount = useTransform(
    scrollY,
    [description2Scroll + 200, windowHeight / 2 + description2Scroll],
    [150, 120]
  );

  const opacity3 = useTransform(
    scrollY,
    [description3Scroll + 200, windowHeight / 2 + description3Scroll],
    [0, 1]
  );
  const descriptionBlurAmount3 = useTransform(
    scrollY,
    [description3Scroll + 200, windowHeight / 2 + description3Scroll],
    [3, 0]
  );
  const lineheight3Amount = useTransform(
    scrollY,
    [description3Scroll + 200, windowHeight / 2 + description3Scroll],
    [150, 120]
  );
  // get Title offset on scroll
  useLayoutEffect(() => {
    const element = titleRef.current;
    setTitleTop(element.offsetTop);
  }, [titleRef]);

  // get other offset on load
  useLayoutEffect(() => {
    const description1 = description1Ref.current;
    setDescription1Scroll(description1.offsetTop - windowHeight);

    const description2 = description2Ref.current;
    setDescription2Scroll(description2.offsetTop - windowHeight);

    const description3 = description3Ref.current;
    setDescription3Scroll(description3.offsetTop - windowHeight);
  }, [windowHeight]);

  useEffect(() => {
    const controls = animate(blurAmount, 0, {
      type: "tween",
      duration: 2,
      onComplete: (v) => {},
    });
    return controls.stop;
  });

  const titleBlur = useMotionTemplate`blur(${blurAmount}px`;
  const descriptionBlur1 = useMotionTemplate`blur(${descriptionBlurAmount1}px`;
  const lineheight1 = useMotionTemplate`${lineheight1Amount}%`;
  const descriptionBlur2 = useMotionTemplate`blur(${descriptionBlurAmount2}px`;
  const lineheight2 = useMotionTemplate`${lineheight2Amount}%`;
  const descriptionBlur3 = useMotionTemplate`blur(${descriptionBlurAmount3}px`;
  const lineheight3 = useMotionTemplate`${lineheight3Amount}%`;

  return (
    <>
      <FullContainer>
        <TitleContainer style={{ filter: titleBlur }} ref={titleRef}>
          <Title>
            Moon
            <wbr />
            watch
          </Title>
          <Kicker>
            new EP 'Refraction' - <a href="#listen">out now</a>
          </Kicker>
        </TitleContainer>
      </FullContainer>
      <ViewBox id="home" centered={false}>
        <MainDescription1>
          <motion.div
            ref={description1Ref}
            style={{
              filter: descriptionBlur1,
              opacity: opacity1,
              lineHeight: lineheight1,
              y: y1,
            }}
          >
            Moonwatch plays layered dream indie pop, merging spellbinding
            melodies with reverb-drenched textures to convey the moods of the
            night sky.
          </motion.div>
        </MainDescription1>
        <MainDescription2>
          <motion.div
            ref={description2Ref}
            style={{
              filter: descriptionBlur2,
              opacity: opacity2,
              lineHeight: lineheight2,
              y: y2,
            }}
          >
            They don’t know where they’ll land,
          </motion.div>
          <motion.div
            ref={description3Ref}
            style={{
              filter: descriptionBlur3,
              opacity: opacity3,
              lineHeight: lineheight3,
              y: y3,
            }}
          >
            but the journey there has mesmerizing views.
          </motion.div>
        </MainDescription2>
      </ViewBox>
    </>
  );
};

Home.propTypes = {};

export default Home;

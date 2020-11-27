import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import { Title, Description } from "../components/Text";
import ViewBox from "../components/ViewBox";

import {
  motion,
  useTransform,
  useViewportScroll,
  useMotionTemplate,
  animate,
} from "framer-motion";

const MainDescription = styled(Description)`
  width: min(100%, 65ch);

  p {
    margin-top: 0;
  }
  span {
    display: block;
  }
`;

const TitleContainer = styled(motion.div)`
  filter: blur(4px);
`;

const Home = () => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const blurAmount = useTransform(scrollY, [0, elementTop], [0, 5]);

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  useEffect(() => {
    const controls = animate(blurAmount, 0, {
      type: "tween",
      duration: 2,
      onComplete: (v) => {},
    });
    return controls.stop;
  });

  const shadow = useMotionTemplate`blur(${blurAmount}px`;

  const containerVariant = {
    initial: {},
    start: {},
  };

  const titleVariant = {
    initial: {
      opacity: 0,
      letterSpacing: `2.3rem`,
      filter: `blur(5px)`,
    },
    start: {
      opacity: 1,
      letterSpacing: `2rem`,
      filter: `blur(0px)`,
    },
  };

  const descriptionVariant = {
    initial: {
      transition: {
        duration: 2,
        staggerChildren: 1,
      },
    },
    start: {
      transition: {
        duration: 2,
        staggerChildren: 1,
      },
    },
  };

  const descriptionChildVariant = {
    initial: { y: 100, opacity: 0, filter: `blur(5px)` },
    start: {
      y: 0,
      filter: `blur(0.2px)`,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  //
  return (
    <motion.div
      initial={"initial"}
      animate={"start"}
      variants={containerVariant}
    >
      <ViewBox id="home" centered={true}>
        <TitleContainer
          variants={titleVariant}
          style={{ filter: shadow }}
          ref={ref}
        >
          <Title>Moonwatch</Title>
        </TitleContainer>
        <MainDescription variants={descriptionVariant}>
          <motion.span
            variants={descriptionChildVariant}
            style={{ marginBottom: "20px" }}
          >
            Moonwatch plays layered dream indie pop, merging spellbinding
            melodies with reverb-drenched textures to convey the moods of the
            night sky.
          </motion.span>
          <motion.span variants={descriptionChildVariant}>
            They don’t know where they’ll land, but the journey there has
            mesmerizing views.
          </motion.span>
        </MainDescription>
      </ViewBox>
    </motion.div>
  );
};

Home.propTypes = {};

export default Home;

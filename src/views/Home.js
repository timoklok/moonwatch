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
  align-items: baseline;
  justify-content: center;
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
                alt="Myriad Eyes \ Myriad Other album cover"
                src="images/MYMO-cover.png"
              />
            </a>
            <p>
              Our first album 'Myriad eyes \ Myriad Other' is out now!
              <br />
              <a href="#listen">Listen online</a>
            </p>
          </Kicker>
          <Kicker style={{ filter: titleBlur }}>
            <a
              title="Full-size album cover"
              href="https://f4.bcbits.com/img/a4272210642_10.jpg"
              target="_blank"
            >
              <img
                alt="Myriad Eyes \ Myriad Other cd"
                src="images/MYMO-cd.png"
              />
            </a>
            <p>
              Get the beautiful foldout cd with lyrics!
              <br />
              <a href="mailto:hello@moonwatch.band?subject=Moonwatch cd&body=Hi,%0D%0A%0D%0AI would like to order the Myriad Eyes \ Myriad Other cd. Here is my address:%0D%0A%0D%0AYOUR ADDRESS HERE%0D%0A%0D%0APlease send me a quote with shipping.">Send us an email</a> to order. You can also order via <a href="https://moonwatch.bandcamp.com/album/myriad-eyes-myriad-other">Bandcamp</a> or visit <a href="https://www.platomania.nl/store/id/11/">Plato Utrecht</a> to buy it.
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

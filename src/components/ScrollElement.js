import useIntersect from "../hooks/useIntersect";
import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import { BackgroundContext } from "../contexts/backgroundContext";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OuterBox = styled.div``;

const ScrollElement = (props) => {
  const { image } = props;
  const outerRef = useRef();
  const background = useContext(BackgroundContext);

  const [ref, entry] = useIntersect({
    threshold: Array.from(Array(20), (x, i) => i / 20),
  });

  useEffect(() => {
    const wheight = window.innerHeight;
    const eheight = outerRef.current.clientHeight;
    if (
      entry.intersectionRatio > 0.9 ||
      entry.intersectionRatio > wheight / eheight - 0.05
    ) {
      background.setImageNumber(parseInt(image));
    }
  }, [image, entry.intersectionRatio, background]);

  return (
    <OuterBox ref={outerRef}>
      <Box ref={ref}>{props.children}</Box>
    </OuterBox>
  );
};

export default ScrollElement;

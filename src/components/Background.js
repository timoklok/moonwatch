import React, { useContext, useEffect, useMemo } from "react";
import styled from "styled-components";
import { BackgroundContext } from "../contexts/backgroundContext";

import { Sketch } from "../utils/sketch";

const BackgroundBox = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
`;

const Background = () => {
  const background = useContext(BackgroundContext);

  const sketch = useMemo(() => {
    return new Sketch({
      debug: true,
      uniforms: {
        intensity: { value: 0.3, type: "f", min: 0, max: 2 },
      },
      fragment: `
		uniform float time;
		uniform float progress;
		uniform float width;
		uniform float scaleX;
		uniform float scaleY;
		uniform float transition;
		uniform float radius;
		uniform float intensity;
		uniform sampler2D texture1;
		uniform sampler2D texture2;
		uniform sampler2D displacement;
		uniform vec4 resolution;
		varying vec2 vUv;

		void main()	{
		  vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

         vec4 d1 = texture2D(texture1, newUV);
         vec4 d2 = texture2D(texture2, newUV);

         float displace1 = (d1.r + d1.g + d1.b)*0.33;
         float displace2 = (d2.r + d2.g + d2.b)*0.33;

         vec4 t1 = texture2D(texture1, vec2(newUV.x, newUV.y + progress * (displace2 * intensity)));
         vec4 t2 = texture2D(texture2, vec2(newUV.x, newUV.y + (1.0 - progress) * (displace1 * intensity)));

         gl_FragColor = mix(t1, t2, progress);

		}

	`,
    });
  }, []);

  useEffect(() => {
    sketch.goto(background.imageNumber);
  }, [background.imageNumber, background, sketch]);

  return <BackgroundBox imageNumber={background.imageNumber}></BackgroundBox>;
};

export default Background;

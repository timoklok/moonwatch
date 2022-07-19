import React from "react";
import styled from "styled-components";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import { Description } from "../components/Text";
// eslint-disable-next-line
import LinkList from "../components/LinkList";

import mq from "../utils/mq";

const MainDescription1 = styled(Description)`
  width: 100%;
  align-self: flex-start;
  text-align: left;
  margin: 10vh 0 3vh 0;
  ${mq.medium`
    width: min(40%, 65ch);
   `}
`;

const MainDescription2 = styled(Description)`
  width: 100%;
  align-self: flex-end;
  text-align: right;
  margin-top: 40px;
  div {
    margin-bottom: 20px;
  }

  ${mq.medium`
    width: min(40%, 65ch);
   `}
`;

const Bandphoto = styled.img`
  width: min(500px, 100%);
`;

// VERVANG DEZE MET EEN PDF
// eslint-disable-next-line
// const biolink = [{ name: "Download bio", url: "images/nils.jpeg" }];

const Bio = () => {
  return (
    <ViewBox id="bio">
      <ViewHeader name="Bio"></ViewHeader>
      <Bandphoto alt="moonwatch bandphoto" src="images/moonwatchband-new.jpg" />

      <MainDescription1>
        Moonwatch plays layered dream indie pop, merging spellbinding melodies
        with reverb-drenched textures to convey the moods of the night sky.
        {
          // eslint-disable-next-line
          /* <LinkList links={biolink} /> */
        }
      </MainDescription1>
      <MainDescription2>
        They don’t know where they’ll land, but the journey there has
        mesmerizing views.
      </MainDescription2>
    </ViewBox>
  );
};

Bio.propTypes = {};

export default Bio;

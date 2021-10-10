import React from "react";
import styled from "styled-components";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import Release from "../components/Release";
import LinkList from "../components/LinkList";

const links = [
  { name: "Bandcamp", url: "https://moonwatch.bandcamp.com/" },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/5coFecXXAxcu5mDy8m440V",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/nl/artist/moonwatch/1473655914",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UC_m3AkdIG4eVuEUzi2H77Hw",
  },
];

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: min(100%, 900px);
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Listen = () => {
  return (
    <ViewBox id="listen">
      <ViewHeader name="Listen"></ViewHeader>

      <ContentWrapper>
        <Release img="karman-cover.jpg" txt="Kármán Line (EP) - 2021" />
        <Release img="refraction-cover.jpg" txt="Refraction EP - 2020" />
        <Release img="deimos-cover.jpg" txt="Deimos (single) - 2019" />
      </ContentWrapper>
      <LinkList title="Listen on" links={links} />
    </ViewBox>
  );
};

Listen.propTypes = {};

export default Listen;

import React from "react";
import styled from "styled-components";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import Spotify from "../components/Spotify";
import LinkList from "../components/LinkList";

const links = [
  { name: "Bandcamp", url: "https://moonwatch.bandcamp.com/" },
  {
    name: "Apple Music",
    url: "https://music.apple.com/nl/artist/moonwatch/1473655914",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/5coFecXXAxcu5mDy8m440V",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UC_m3AkdIG4eVuEUzi2H77Hw",
  },
];

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: min(100%, 600px);
`;

const Listen = () => {
  return (
    <ViewBox id="listen">
      <ViewHeader name="Listen"></ViewHeader>
      <ContentWrapper>
        <Spotify />
        <LinkList title="Or on" links={links} />
      </ContentWrapper>
    </ViewBox>
  );
};

Listen.propTypes = {};

export default Listen;

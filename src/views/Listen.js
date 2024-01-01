import React, { useState } from "react";
import styled from "styled-components";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";
import Release from "../components/Release";
import LinkList from "../components/LinkList";
import { baseText, subText } from "../components/Text";
import mq from "../utils/mq";

const links = [
  {
    name: "Bandcamp",
    url: "https://moonwatch.bandcamp.com/",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/5coFecXXAxcu5mDy8m440V",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/artist/moonwatch/1473655914",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@moonwatchband",
  },
  {
    name: "Tidal",
    url: "https://tidal.com/browse/artist/16356830",
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/artist/70172652",
  },
  {
    name: "Amazon",
    url: "https://music.amazon.com/artists/B07VKCVGL9/moonwatch",
  },
];

const releases = [
  {
    title: "Lūmen - 2021",
    shortTitle: "Lūmen",
    cover: "lumen-cover.jpg",
    links: [
      {
        name: "Bandcamp",
        url: "https://moonwatch.bandcamp.com/track/l-men",
      },
      {
        name: "Spotify (pre-save)",
        url: "https://distrokid.com/hyperfollow/moonwatch/lmen",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=xnlJhhpedwg",
      },
    ],
  },
  {
    title: "Kármán Line (EP) - 2021",
    shortTitle: "Kármán Line",
    cover: "karman-cover.jpg",
    links: [
      {
        name: "Bandcamp",
        url: "https://moonwatch.bandcamp.com/album/k-rm-n-line",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/album/7HHeGaCByOzikGXhHjE3BQ",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/album/k%C3%A1rm%C3%A1n-line-ep/1585872780",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=sESwaH5IX5I&list=PLDly_aBW4C5OqvvyT25Fwgs6Fx4SiXMx5",
      },
      {
        name: "Tidal",
        url: "https://tidal.com/browse/album/197680815",
      },
      {
        name: "Deezer",
        url: "https://www.deezer.com/album/258842602",
      },
      {
        name: "Amazon",
        url: "https://music.amazon.com/albums/B09G8MR3DL",
      },
    ],
  },
  {
    title: "Refraction EP - 2020",
    shortTitle: "Refraction EP",
    cover: "refraction-cover.jpg",
    links: [
      {
        name: "Bandcamp",
        url: "https://moonwatch.bandcamp.com/album/refraction-ep",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/album/59jrZAPPf0lYRiyIPPMAOV",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/album/refraction-ep/1545999872",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=vuMxCRZ43vY&list=PLDly_aBW4C5MFfHgDACt_-0rMiez0MiQJ",
      },
      {
        name: "Tidal",
        url: "https://tidal.com/browse/album/167099148",
      },
      {
        name: "Deezer",
        url: "https://www.deezer.com/album/195020922",
      },
      {
        name: "Amazon",
        url: "https://music.amazon.com/albums/B08R446C3L",
      },
    ],
  },
  {
    title: "Deimos (single) - 2019",
    shortTitle: "Deimos",
    cover: "deimos-cover.jpg",
    links: [
      {
        name: "Bandcamp",
        url: "https://moonwatch.bandcamp.com/track/deimos",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/album/0VDvHNRi3CuzHh8JdyKrLa",
      },
      {
        name: "Apple Music",
        url: "https://music.apple.com/album/deimos-single/1473851055",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/watch?v=_4CoUa-4DNQ&list=PLDly_aBW4C5PgfD_xNFPcLk_kId9--NwE",
      },
      {
        name: "Tidal",
        url: "https://tidal.com/browse/album/113777106",
      },
      {
        name: "Deezer",
        url: "https://www.deezer.com/album/104627142",
      },
      {
        name: "Amazon",
        url: "https://music.amazon.com/albums/B07VJJQYDY",
      },
    ],
  },
];

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: min(100%, 900px);
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: center;
`;

const ReleaseLinks = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ReleaseLinkItem = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
  ${baseText};
  line-height: 1.5;
  &:hover {
    text-decoration: underline;
  }
  ${mq.medium`
    margin: 0 20px;
    font-weight: 400;
    letter-spacing: 0.3rem; 
   `}
`;

const OverlayTitle = styled.span`
  ${subText};
  margin-bottom: 1rem;
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: none;
  border: none;
  margin: 0;
  padding: 0;

  svg {
    stroke: white;
    fill: white;
  }
`;

const Listen = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [currentRelease, setCurrentRelease] = useState(false);

  const openRelease = (release) => {
    setOverlayOpen(true);
    setCurrentRelease(release);
  };

  const closeOverlay = () => setOverlayOpen(false);

  return (
    <ViewBox id="listen">
      <ViewHeader name="Listen"></ViewHeader>

      <ContentWrapper>
        {releases.map((release) => {
          return (
            <Release
              clickHandler={() => {
                openRelease(release);
              }}
              img={release.cover}
              txt={release.title}
              key={release.title}
            />
          );
        })}
      </ContentWrapper>
      <LinkList title="Listen on" links={links} />
      <ReleaseLinks visible={overlayOpen}>
        {currentRelease && (
          <>
            <Close onClick={closeOverlay}>
              <svg width="100%" height="100%" viewBox="0 0 40 40">
                <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,20,0.20101)">
                  <rect x="0" y="12" width="28" height="4" />
                </g>
                <g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-5.45584,14.3431)">
                  <rect x="0" y="20" width="28" height="4" />
                </g>
              </svg>
            </Close>

            <OverlayTitle>
              Listen to {currentRelease.shortTitle} on:{" "}
            </OverlayTitle>
            {currentRelease.links.map((link) => (
              <ReleaseLinkItem
                key={link.name}
                title={`Listen to ${currentRelease.shortTitle} on ${link.name}`}
                href={link.url}
              >
                {link.name}
              </ReleaseLinkItem>
            ))}
          </>
        )}
      </ReleaseLinks>
    </ViewBox>
  );
};

Listen.propTypes = {};

export default Listen;

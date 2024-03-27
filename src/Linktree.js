import "./Linktree.css";
import React from "react";
import styled from "styled-components";
import { SiteTitle } from "./components/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  margin: 0 auto;
`;

const Links = styled.div`
  margin: 0vh 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
`;

const Link = styled.a`
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 16px;
  color: white;
  border: 1px solid white;
  text-align: center;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  :hover {
    background: white;
    color: black;
  }
`;

const LinkList = [
  {
    text: "Show on May 11th at Popradar Radarcafé, Den Haag, NL",
    url: "https://site.popradar.nl/article/1347/moonwatch-machina",
  },
  {
    text: "Video for single Lūmen",
    url: "https://www.youtube.com/watch?v=xnlJhhpedwg",
  },
  {
    text: "Moonwatch on Spotify",
    url: "https://open.spotify.com/artist/5coFecXXAxcu5mDy8m440V",
  },
  {
    text: "Join the newsletter for updates about releases and shows",
    url: "https://mailchi.mp/a3918417976b/moonwatch-newsletter",
  },
  {
    text: "Looking for more? Check out the Moonwatch website!",
    url: "https://moonwatch.band",
  },
];

function Linktree() {
  return (
    <Container>
      <SiteTitle>
        Moon
        <wbr />
        watch
      </SiteTitle>

      <Links>
        {LinkList.map((link, idx) => {
          return (
            <Link key={idx} href={link.url}>
              {link.text}
            </Link>
          );
        })}
      </Links>
    </Container>
  );
}

export default Linktree;

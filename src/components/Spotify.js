import React from "react";
import styled from "styled-components";

const SpotifyContainer = styled.div`
  text-align: left;
`;

const Spotify = () => {
  return (
    <SpotifyContainer>
      <iframe
        title="Moonwatch on Bandcamp"
        width="300"
        height="470"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        src="https://bandcamp.com/EmbeddedPlayer/album=496263388/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://moonwatch.bandcamp.com/album/refraction-ep">
          Refraction EP by Moonwatch
        </a>
      </iframe>
    </SpotifyContainer>
  );
};

export default Spotify;

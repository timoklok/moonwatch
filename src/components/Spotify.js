import React from "react";
import styled from "styled-components";

const SpotifyContainer = styled.div`
  text-align: left;
`;

const Spotify = () => {
  return (
    <SpotifyContainer>
      <iframe
        title="Moonwatch on Spotify"
        src="https://open.spotify.com/embed/album/59jrZAPPf0lYRiyIPPMAOV"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </SpotifyContainer>
  );
};

export default Spotify;

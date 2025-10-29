import React from "react";
import styled from "styled-components";

const PlayerContainer = styled.div`
  text-align: left;
`;

const EmbeddedPlayer = () => {
  return (
    <PlayerContainer>
      <iframe
        title="Moonwatch on Bandcamp"
        width="300"
        height="470"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        src="https://bandcamp.com/EmbeddedPlayer/album=415957320/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://moonwatch.bandcamp.com/album/k-rm-n-line">
          Kármán Line by Moonwatch
        </a>
      </iframe>
    </PlayerContainer>
  );
};

export default EmbeddedPlayer;

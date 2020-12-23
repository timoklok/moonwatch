import React from "react";
import ViewHeader from "../components/ViewHeader";
import Video from "../components/Video";
import ViewBox from "../components/ViewBox";

const Watch = () => {
  // var tag = document.createElement("script");
  // tag.src = "https://www.youtube.com/player_api";
  // var firstScriptTag = document.getElementsByTagName("script")[0];
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  return (
    <ViewBox id="watch">
      <ViewHeader name="Watch"></ViewHeader>
      <Video still="reaper.jpg" id="vuMxCRZ43vY" name="Reaper (2020)" />
      <Video still="textures.jpg" id="O7MJwu36buc" name="Textures (2020)" />
      <Video still="deimos.jpg" id="_4CoUa-4DNQ" name="Deimos (2019)" />
    </ViewBox>
  );
};

Watch.propTypes = {};

export default Watch;

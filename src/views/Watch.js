import React from "react";
import ViewHeader from "../components/ViewHeader";
import Video from "../components/Video";
import ViewBox from "../components/ViewBox";

const Watch = () => {
  return (
    <ViewBox id="watch">
      <ViewHeader name="Watch"></ViewHeader>
      <Video still="lumen-video.jpg" id="xnlJhhpedwg" name="Lūmen (2024)" />
      <Video still="asun.jpg" id="sESwaH5IX5I" name="A Sun Came Up (2021)" />
      <Video still="reaper.jpg" id="vuMxCRZ43vY" name="Reaper (2020)" />
      <Video still="textures.jpg" id="O7MJwu36buc" name="Textures (2020)" />
      <Video still="deimos.jpg" id="_4CoUa-4DNQ" name="Deimos (2019)" />
    </ViewBox>
  );
};

Watch.propTypes = {};

export default Watch;

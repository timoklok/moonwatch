import React from "react";
import ViewHeader from "../components/ViewHeader";
import Video from "../components/Video";
import ViewBox from "../components/ViewBox";

const Watch = () => {
  return (
    <ViewBox id="watch">
      <ViewHeader name="Watch"></ViewHeader>
      <Video id="_4CoUa-4DNQ" name="Reaper (2020)" />
      <Video id="_4CoUa-4DNQ" name="Textures (2020)" />
      <Video id="_4CoUa-4DNQ" name="Deimos (2019)" />
    </ViewBox>
  );
};

Watch.propTypes = {};

export default Watch;

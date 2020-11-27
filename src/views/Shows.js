import React from "react";
import ViewHeader from "../components/ViewHeader";
import ViewBox from "../components/ViewBox";

const Shows = () => {
  const showList = [];

  return (
    <>
      {showList.length > 0 && (
        <ViewBox id="shows">
          <ViewHeader name="Shows"></ViewHeader>
          <p>description</p>
        </ViewBox>
      )}
    </>
  );
};

Shows.propTypes = {};

export default Shows;

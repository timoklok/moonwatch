import React from "react";
import PropTypes from "prop-types";
import { Header } from "./Text";

const ViewHeader = ({ name }) => {
  return <Header>{name}</Header>;
};

ViewHeader.propTypes = {
  name: PropTypes.string,
};

export default ViewHeader;

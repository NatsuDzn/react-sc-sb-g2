import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "../particles/Colors";

const ViewerCountWrapper = styled.p`
  font-family: "Roobert TRIAL";
  font-size: 12px;
  color: ${Colors.neutral_grey};
  margin: 2px 0;
`;

const ViewerCount = (props) => {
  const { children } = props;

  return <ViewerCountWrapper>{children}</ViewerCountWrapper>;
};

ViewerCount.propTypes = {
  text: PropTypes.string,
};

export default ViewerCount;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { size } from "./Image"

const TitleWrapper = styled.h1`
  font-family: "Roobert TRIAL";
  color: white;
  font-weight: bold;
  font-size: ${(props) => (props.size === size.s ? "14px" : "16px")};
  margin: 2px 0;
`;

const Title = (props) => {
  const { children, size } = props;

  return <TitleWrapper size={size}>{children}</TitleWrapper>;
};

Title.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string
};

export default Title;
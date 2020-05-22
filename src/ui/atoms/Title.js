import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  font-family: "Roobert TRIAL";
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin: 2px 0;
`;

const Title = (props) => {
  const { children } = props;

  return <TitleWrapper>{children}</TitleWrapper>;
};

Title.propTypes = {
  text: PropTypes.string,
};

export default Title;
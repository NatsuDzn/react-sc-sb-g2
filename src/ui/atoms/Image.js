import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: block;
  height: 86px;
  width: 72px;
  background-size: cover;
  background-position: center;
  margin: 8px 0;
`;

const Image = (props) => {
  const { image } = props;
  return <ImageWrapper style={{ backgroundImage: `url(${image})` }} />;
};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;

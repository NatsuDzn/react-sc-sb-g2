import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const size = {
  s: "s",
  large: "large",
};

const ImageWrapper = styled.div`
  display: block;
  width: ${(props) => (props.size === size.s ? "88px" : "104px")};
  height: ${(props) => (props.size === size.s ? "112px" : "131.67px")};
  background-size: cover;
  background-position: center;
  margin: 8px 0;
  margin-right: ${(props) => (props.size !== size.s ? "1rem" : "0")};
`;

const Image = (props) => {
  const { image, size } = props;
  return (
    <ImageWrapper style={{ backgroundImage: `url(${image})` }} size={size} />
  );
};

Image.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
};

export default Image;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const colors = {
  purple: "purple",
  grey: "grey"
};

const BadgeWrapper = styled.span`
  font-family: "Roobert TRIAL";
  font-size: 12px;
  background: ${(props) =>
    props.color === colors.purple ? Colors.brand_primary : Colors.background_grey};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 22px;
  color: white;
`;

const Badge = props => {
  const { text, color } = props;
  return <BadgeWrapper color={color}>{text}</BadgeWrapper>;
};

Badge.propTypes = {
  color: PropTypes.oneOf(Object.keys(colors)),
  text: PropTypes.string
};

Badge.defaultProps = {
  color: colors.grey
};

export default Badge;

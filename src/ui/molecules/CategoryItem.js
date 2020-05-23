import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge, Title, ViewerCount, Image } from "../atoms";

const CategoryItemWrapper = styled.div`
  font-family: "Roobert TRIAL";
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "row" ? "row" : "column"};
  margin: 16px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BadgesWrapper = styled.div`
  display: inline-flex;
  margin-top: 0.5rem;
  margin: 2px 0;
`;

const CategoryItem = (props) => {
  const { title, badges, viewers, image, size, orientation } = props;

  return (
    <CategoryItemWrapper orientation={orientation}>
      <Image image={image} size={size} />
      <Container>
        <Title size={size}>{title}</Title>
        <ViewerCount>{viewers}</ViewerCount>
        <BadgesWrapper>
          {badges !== undefined
            ? badges.map((badge, i) => <Badge text={badge} key={i} />)
            : null}
        </BadgesWrapper>
      </Container>
    </CategoryItemWrapper>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string,
  badges: PropTypes.array,
  viewers: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
  orientation: PropTypes.string,
};

CategoryItem.defaultProps = {};

export default CategoryItem;

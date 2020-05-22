import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge, Title, ViewerCount, Image } from "../atoms";

const CategoryItemWrapper = styled.div`
  font-family: "Roobert TRIAL";
  display: flex;
  /* flex-wrap: wrap; */
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
  const { title, badges, viewers, image } = props;

  return (
    <CategoryItemWrapper
      style={{
        flexDirection: viewers === undefined ? "column" : "row",
      }}
    >
      <Image image={image} />

      <Container style={{ marginLeft: viewers === undefined ? "0" : "1rem"}}>
        <Title
          style={{
            fontSize: viewers === undefined ? "14px" : "16px",
          }}
        >
          {title}
        </Title>
        <ViewerCount>
          {viewers !== undefined ? viewers + " spectateurs" : null}
        </ViewerCount>
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
  image: PropTypes.string
};

CategoryItem.defaultProps = {};

export default CategoryItem;

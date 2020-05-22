import React from "react";
import styled from "styled-components";
import CategoryItem from "./ui/molecules/CategoryItem";
import "./reset.css";
import "./fonts.css";

const AppWrapper = styled.div`
  font-family: "Roobert TRIAL";
  width: 375px;
  height: 744px;
  background-color: black;
  padding: 1rem;
`;

const App = () => {
  return (
    <AppWrapper>
      <CategoryItem
        title="Just Chatting"
        badges={["IRL", "Design", "Dev"]}
        viewers="250k"
        image="https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
        size="xs"
      />
    </AppWrapper>
  );
};

export default App;

import React from "react";
import { size } from "../ui/atoms/Image";
import CategoryItem from "../ui/molecules/CategoryItem";
import { withKnobs, text, array, select } from "@storybook/addon-knobs";
export default {
  title: "CategoryItem",
  parameters: {
    backgrounds: [
      { name: "dark", value: "#000000", default: true }
    ],
  },
  component: CategoryItem,
  decorators: [withKnobs],
};

export const SmallCardBase = () => (
  <CategoryItem
    title={text("Title", "Just Chatting")}
    badges={undefined}
    viewers={text("Viewers Count", "173k")}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    size="xs"
  />
);

export const XLCardWithoutDetails = () => (
  <CategoryItem
    title={text("Title", "Just Chatting")}
    badges={undefined}
    viewers={undefined}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    size="large"
  />
);

export const SmallCardWithBadge = () => (
  <CategoryItem
    title={text("Title", "Just Chatting")}
    badges={array("Badges", ["IRL", "Design"])}
    viewers={undefined}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    size="xs"
  />
);

export const LargeCardBase = () => (
  <CategoryItem
    title={text("Title", "Just Chatting")}
    badges={array("Badges", ["IRL", "Design"])}
    viewers={text("Viewers Count", "173k")}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    size="large"
  />
);
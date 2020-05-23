import React from "react";
import CategoryItem from "../ui/molecules/CategoryItem";
import { withKnobs, text, array } from "@storybook/addon-knobs";
export default {
  title: "CategoryItem",
  parameters: {
    backgrounds: [
      { name: "black", value: "#000000", default: true }
    ],
  },
  component: CategoryItem,
  decorators: [withKnobs],
};

export const SmallCardBase = () => (
  <CategoryItem
    title={text("Title", "VALORANT")}
    badges={undefined}
    viewers={text("Viewers Count", "96k spectateurs")}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-144x192.jpg"
    )}
    size="s"
    orientation="column"
  />
);

export const XLCardWithoutDetails = () => (
  <CategoryItem
    title={text("Title", "Minecraft")}
    badges={undefined}
    viewers={""}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-144x192.jpg"
    )}
    size="large"
    orientation="column"
  />
);

export const SmallCardWithBadge = () => (
  <CategoryItem
    title={text("Title", "Overwatch")}
    badges={array("Badges", ["FPS", "MOBA"])}
    viewers={text("Viewers Count", "17k spectateurs")}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-144x192.jpg"
    )}
    size="s"
    orientation="column"
  />
);

export const LargeCardBase = () => (
  <CategoryItem
    title={text("Title", "Just Chatting")}
    badges={array("Badges", ["IRL", "Design"])}
    viewers={text("Viewers Count", "173k spectateurs")}
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    size="large"
    orientation="row"
  />
);
import React from "react";
// import CategoryItem from "../ui/molecules/CategoryItem";
import Image, { size } from "../ui/atoms/Image";
import { withKnobs, select, text } from "@storybook/addon-knobs";
export default {
  title: "Image",
  component: Image,
  parameters: {
    backgrounds: [{ name: "twitter", value: "#000000", default: true }],
  },
  decorators: [withKnobs],
};

export const CategoryImage = () => (
  <Image
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    size={select("Thumbnail size", size, size.xs)}
  />
);

import React from "react";
// import CategoryItem from "../ui/molecules/CategoryItem";
import Image from "../ui/atoms/Image";
import { withKnobs, text } from "@storybook/addon-knobs";
export default {
  title: "Image",
  component: Image,
  parameters: {
    backgrounds: [
      { name: "twitter", value: "#000000", default: true }
    ],
  },
  decorators: [withKnobs],
};

export const Small = () => (
  <Image
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
  />
);

export const Medium = () => (
  <Image
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
    style="width: 88px; height: 112px;"
  />
);

export const Large = () => (
  <Image
    image={text(
      "Background",
      "https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-144x192.jpg"
    )}
  />
);

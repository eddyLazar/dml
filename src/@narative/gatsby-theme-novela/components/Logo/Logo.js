import Paragraph from "@narative/gatsby-theme-novela/src/components/Paragraph";
import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <Paragraph style={{ margin: 0, fontFamily: "Steinbeck" }}>
      Делай Мир Лучше
    </Paragraph>
  );
}

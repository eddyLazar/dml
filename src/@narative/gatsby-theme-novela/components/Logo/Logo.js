import Image from "@narative/gatsby-theme-novela/src/components/Image";
import Paragraph from "@narative/gatsby-theme-novela/src/components/Paragraph";
import React from "react";
import logoSrc from "./square.png";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={logoSrc} style={{ width: 50, marginRight: 10 }}></Image>
      <Paragraph
        style={{ margin: 0, marginTop: 4, fontFamily: "Steinbeck", padding: 0 }}
      >
        ДМЛ
      </Paragraph>
    </div>
  );
}

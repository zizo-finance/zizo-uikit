import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <image width="512" height="512" href="/images/panty/token.png"/>
    </Svg>
  );
};

export default Icon;

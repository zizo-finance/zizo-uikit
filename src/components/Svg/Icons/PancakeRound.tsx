import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 264 270" {...props}>
      <image width="264" height="270" href="/images/zizo/token.png"/>
    </Svg>
  );
};

export default Icon;

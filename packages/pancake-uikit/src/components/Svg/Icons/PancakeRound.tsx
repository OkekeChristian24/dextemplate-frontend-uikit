import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
    xmlSpace="preserve"
    width={50}
    height={50}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      // imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 170 191"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1={19.52}
        y1={156.108}
        x2={150.643}
        y2={35.21}
      >
        <stop
          offset={0}
          style={{
            stopOpacity: 1,
            stopColor: "#7816e7",
          }}
        />
        <stop
          offset={1}
          style={{
            stopOpacity: 1,
            stopColor: "#15d8ba",
          }}
        />
      </linearGradient>
    </defs>
    <path
      d="M29 0h31c17 0 32 7 43 18s18 26 18 42c0 4-1 7-1 11l-1 1c13 2 25 8 33 17 11 10 18 25 18 42s-7 32-18 43c-10 11-26 17-42 17H29c-8 0-15-3-21-8-5-5-8-12-8-20V29c0-8 3-15 8-21 6-5 13-8 21-8zm16 104h78c3 0 5 2 5 5v42c0 3-2 6-5 6H45c-3 0-5-3-5-6v-42c0-3 2-5 5-5zm15-76c15 0 27 11 27 26S75 80 60 80c-14 0-26-11-26-26s12-26 26-26zm0-13H29c-4 0-8 1-10 4-3 2-4 6-4 10v134c0 3 1 7 4 9 2 3 6 4 10 4h81c12 0 24-5 32-13s13-19 13-32c0-12-5-24-13-32s-20-13-32-13c-1 0-2 0-3-1-4-1-6-5-4-9 1-3 1-5 2-8 0-2 1-5 1-8 0-12-5-24-14-32-8-8-19-13-32-13z"
      style={{
        fill: "url(#a)",
      }}
    />
  </Svg>
  );
};

export default Icon;

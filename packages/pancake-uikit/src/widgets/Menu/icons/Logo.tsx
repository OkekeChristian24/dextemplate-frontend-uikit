import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FB5230" : "#FB5230";
  return (
<Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={100}
    height={40}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      // imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 1257 257"
    {...props}
  >
    <defs>
      <linearGradient
        id="id0"
        gradientUnits="userSpaceOnUse"
        x1={26.215}
        y1={209.654}
        x2={202.314}
        y2={47.287}
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
      <style>{".fil1{fill:#fff;fill-rule:nonzero}"}</style>
    </defs>
    <g id="Layer_x0020_1">
      <g id="_388402792608">
        <path
          d="M38 0h43c22 0 42 9 57 24 15 14 24 35 24 57 0 5-1 9-1 14l-1 1c18 3 33 11 45 23 14 15 24 35 24 57s-10 43-24 57c-15 15-35 24-57 24H38c-10 0-20-4-27-11S0 229 0 219V38c0-10 4-20 11-27S28 0 38 0zm23 139h104c4 0 7 4 7 8v56c0 4-3 7-7 7H61c-4 0-7-3-7-7v-56c0-4 3-8 7-8zM81 37c20 0 35 16 35 35 0 20-15 36-35 36S45 92 45 72c0-19 16-35 36-35zm0-17H38c-5 0-9 2-13 5-3 4-5 8-5 13v181c0 5 2 9 5 13 4 3 8 5 13 5h110c16 0 32-7 43-18s18-26 18-43-7-32-18-43-27-18-43-18c-2 0-3 0-4-1-5-1-8-7-6-12 1-4 2-7 3-11 1-3 1-6 1-10 0-17-7-32-18-43S98 20 81 20z"
          style={{
            fill: "url(#id0)",
          }}
        />
        <path
          className="fil1"
          d="M352 161c0 11-7 17-20 17h-27v-35h26c13 0 21 7 21 18zm-3-55c0 11-7 17-20 17h-24V90h24c13 0 20 6 20 16zm30 58c0-15-11-29-25-32 12-4 22-14 22-30 0-19-15-34-43-34h-54v132h57c27 0 43-15 43-36z"
        />
        <path
          id="1"
          className="fil1"
          d="M426 148c0-20 10-26 25-26h7V94c-14 0-25 7-32 18V95h-26v105h26v-52z"
        />
        <path
          id="2"
          className="fil1"
          d="M476 200h27V95h-27v105zm14-117c9 0 16-7 16-15 0-9-7-16-16-16-10 0-17 7-17 16 0 8 7 15 17 15z"
        />
        <path
          id="3"
          className="fil1"
          d="M610 170c-1-38-59-26-59-45 0-6 5-10 15-10s17 5 17 13h26c-2-21-17-34-42-34-26 0-42 14-42 31 0 38 59 26 59 45 0 6-5 11-16 11-10 0-18-6-19-14h-26c1 19 19 34 45 34s42-13 42-31z"
        />
        <path
          id="4"
          className="fil1"
          d="M676 115c14 0 25 9 25 23h-50c2-15 12-23 25-23zm50 52h-29c-3 7-9 13-21 13-13 0-24-9-25-25h76c1-3 1-6 1-10 0-31-21-51-51-51-31 0-53 21-53 54 0 32 22 53 53 53 26 0 43-15 49-34z"
        />
        <path
          id="5"
          className="fil1"
          d="M839 162c0-47-67-32-67-58 0-11 8-16 18-16 11 0 18 7 19 16h29c-2-24-20-38-47-38s-47 15-47 38c0 48 68 31 68 59 0 10-7 16-20 16-12 0-19-7-20-17h-28c0 25 21 39 49 39 30 0 46-19 46-39z"
        />
        <path
          id="6"
          className="fil1"
          d="M881 200h29l19-73 19 73h28l31-105h-25l-19 80-20-80h-27l-20 80-19-80h-27z"
        />
        <path
          id="7"
          className="fil1"
          d="M1014 147c0 33 21 54 48 54 16 0 28-7 34-17v16h27V95h-27v15c-6-8-17-16-34-16-27 0-48 21-48 53zm82 1c0 19-13 30-27 30s-28-11-28-31 14-30 28-30 27 11 27 31z"
        />
        <path
          id="8"
          className="fil1"
          d="M1175 110V95h-26v154h26v-64c7 8 18 16 35 16 26 0 47-21 47-54 0-32-21-53-47-53-17 0-29 8-35 16zm55 37c0 20-13 31-27 31s-28-11-28-30c0-20 14-31 28-31s27 10 27 30z"
        />
      </g>
    </g>
  </Svg>
  
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);

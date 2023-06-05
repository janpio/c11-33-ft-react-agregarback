import * as React from "react";
import { type SVGProps } from "react";

const BarbellSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="#fff"
    strokeWidth={4.608}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M248 124h-12V88a12.014 12.014 0 0 0-12-12h-20V64a12.014 12.014 0 0 0-12-12h-24a12.014 12.014 0 0 0-12 12v60h-56V64a12.014 12.014 0 0 0-12-12H64a12.014 12.014 0 0 0-12 12v12H32a12.014 12.014 0 0 0-12 12v36H8a4 4 0 0 0 0 8h12v36a12.014 12.014 0 0 0 12 12h20v12a12.014 12.014 0 0 0 12 12h24a12.014 12.014 0 0 0 12-12v-60h56v60a12.014 12.014 0 0 0 12 12h24a12.014 12.014 0 0 0 12-12v-12h20a12.014 12.014 0 0 0 12-12v-36h12a4 4 0 0 0 0-8ZM32 172a4.005 4.005 0 0 1-4-4V88a4.005 4.005 0 0 1 4-4h20v88Zm60 20a4.005 4.005 0 0 1-4 4H64a4.005 4.005 0 0 1-4-4V64a4.005 4.005 0 0 1 4-4h24a4.005 4.005 0 0 1 4 4Zm104 0a4.005 4.005 0 0 1-4 4h-24a4.005 4.005 0 0 1-4-4V64a4.005 4.005 0 0 1 4-4h24a4.005 4.005 0 0 1 4 4Zm32-24a4.005 4.005 0 0 1-4 4h-20V84h20a4.005 4.005 0 0 1 4 4Z" />
  </svg>
);
export default BarbellSVG;

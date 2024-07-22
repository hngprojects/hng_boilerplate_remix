import React from "react";

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  properties,
) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    {">"}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

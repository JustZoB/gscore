import React from "react";
import colors from "../../utils/colors";

export interface Props {
  color: colors,
}

export const SettingsSVG: React.FC<Props> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.506 7.566c.226.323.424.665.59 1.022l2.429 1.35a9.563 9.563 0 01.01 4.125l-2.438 1.35a6.9 6.9 0 01-.59 1.022l.046 2.784a9.75 9.75 0 01-3.572 2.072l-2.39-1.434a8.257 8.257 0 01-1.182 0l-2.381 1.425a9.618 9.618 0 01-3.581-2.063l.047-2.775a7.509 7.509 0 01-.591-1.03l-2.428-1.35a9.563 9.563 0 01-.01-4.126l2.438-1.35a6.9 6.9 0 01.59-1.022l-.046-2.784A9.75 9.75 0 019.019 2.71l2.39 1.434a8.277 8.277 0 011.181 0l2.382-1.425a9.618 9.618 0 013.581 2.063l-.047 2.784z"
      ></path>
    </svg>
  );
}

export default SettingsSVG;

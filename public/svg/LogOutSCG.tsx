import React from "react";
import colors from "../../utils/colors";

export interface Props {
  color: colors,
}

export const LogOutSCG: React.FC<Props> = ({ color }) => {
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
        d="M16.313 8.063L20.25 12l-3.938 3.938M9.75 12h10.5M9.75 20.25H4.5a.75.75 0 01-.75-.75v-15a.75.75 0 01.75-.75h5.25"
      ></path>
    </svg>
  );
}

export default LogOutSCG;

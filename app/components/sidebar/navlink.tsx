import { Link, useLocation } from "@remix-run/react";
import { ReactNode } from "react";

type NavlinkProperties = {
  path: string;
  icon: ReactNode;
  text: string;
  expanded: boolean;
};

export default function Navlink({
  path,
  icon,
  text,
  expanded,
}: NavlinkProperties) {
  const { pathname } = useLocation();
  return (
    <li
      className={`flex cursor-pointer items-center gap-[0.81rem] transition duration-200 ease-in-out hover:bg-[#F97316] hover:text-[#fafafa] ${
        pathname === path ? "bg-[#F97316] text-[#fafafa]" : ""
      } ${
        expanded
          ? "ml-1 w-fit rounded-lg py-[0.63rem] pl-[1.25rem] pr-2"
          : "ml-2 h-[3rem] w-[3rem] justify-center rounded-full"
      }`}
    >
      <Link
        className={`flex items-center justify-center ${
          expanded ? "gap-3" : "gap-0"
        }`}
        to={path}
      >
        <div>{icon}</div>
        <span
          className={`text-[1rem] font-[500] leading-[1.2rem] ${
            expanded ? "w-[8.5rem]" : "w-0 overflow-hidden"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

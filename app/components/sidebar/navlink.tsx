import { Link, useLocation } from "@remix-run/react";
import { ReactNode } from "react";

type NavlinkProps = {
  path: string;
  icon: ReactNode;
  text: string;
  expanded: boolean;
};

export default function Navlink({ path, icon, text, expanded }: NavlinkProps) {
  const { pathname } = useLocation();
  return (
    <li
      className={`flex items-center gap-[0.81rem] transition duration-200 ease-in-out cursor-pointer ${
        pathname === path ? "bg-[#F97316] text-[#fafafa]" : ""
      } ${
        expanded
          ? "rounded-lg pl-[1.25rem] pr-2 w-fit ml-1 py-[0.63rem]"
          : " ml-2 w-[3rem] h-[3rem] rounded-full justify-center"
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
          className={`text-[1rem] leading-[1.2rem] font-[500] ${
            expanded ? "w-[8.5rem]" : "w-0 overflow-hidden"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}

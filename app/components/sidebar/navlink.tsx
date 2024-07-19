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
      className={`flex items-center gap-[0.81rem] py-[0.63rem] pl-[1.25rem] w-fit pr-2 transition duration-300 ease-in-out h-[3rem] ml-1 cursor-pointer ${
        pathname === path ? "bg-[#F97316] text-[#fafafa]" : ""
      } ${expanded ? "rounded-[8px]" : " ml-2 w-[3rem] rounded-[50%] justify-center px-[0.63rem]"}`}
    >
      <Link className='flex items-center justify-center gap-3' to={path}>
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

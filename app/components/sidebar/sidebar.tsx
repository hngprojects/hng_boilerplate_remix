import {
  Briefcase,
  Building2,
  Cpu,
  Monitor,
  SlidersHorizontal,
  User,
} from "lucide-react";
import { useState } from "react";

import Profile from "../Profile";
import MenuButton from "./menu-button";
import Navlink from "./navlink";

type SideBarProperties = {
  isMenuOpen: boolean;
  handleToggleMenu: () => void;
};
export default function MobileSidebarComponent({
  isMenuOpen,
  handleToggleMenu,
}: SideBarProperties) {
  const [isExpanded] = useState(true);

  return (
    <aside
      className={`fixed left-0 top-0 z-30 flex h-screen w-full flex-col items-start gap-14 bg-background transition duration-200 ease-in-out sm:hidden ${
        isExpanded ? "w-full" : "w-fit px-2"
      }`}
    >
      <div
        className={`flex w-full ${
          isExpanded
            ? "items-center justify-between"
            : "flex-col items-start justify-center gap-6"
        } mt-6 px-[1.25rem]`}
      >
        <Profile expanded={isExpanded} />
        <div
          className={`flex gap-12 ${
            isExpanded ? "items-center" : "flex-col items-start justify-center"
          }`}
        >
          <MenuButton
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
          />
        </div>
      </div>

      <nav>
        <ul className="flex flex-col gap-[13px]">
          <Navlink
            path="/home"
            text="Home"
            icon={<User />}
            expanded={isExpanded}
          />
          <Navlink
            path="/aboutus"
            text="About us"
            icon={<Building2 />}
            expanded={isExpanded}
          />
          <Navlink
            path="/jobs"
            text="Job Listing"
            icon={<Briefcase />}
            expanded={isExpanded}
          />
          <Navlink
            path="/features"
            text="Features Updates"
            icon={<Cpu />}
            expanded={isExpanded}
          />
          <Navlink
            path="/blog"
            text="Blog"
            icon={<Monitor />}
            expanded={isExpanded}
          />
          <Navlink
            path="/settings"
            text="Settings"
            icon={<SlidersHorizontal />}
            expanded={isExpanded}
          />
        </ul>{" "}
      </nav>
    </aside>
  );
}

import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Cpu,
  Monitor,
  SlidersHorizontal,
  User,
} from "lucide-react";
import { useState } from "react";

import Profile from "../Profile";
import Navlink from "./navlink";

export default function MobileSidebarComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded((previous) => !previous);
  }

  return (
    <aside
      className={`fixed z-10 flex h-screen flex-col items-start gap-14 bg-background transition duration-200 ease-in-out sm:hidden ${
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
          <button
            onClick={toggleExpanded}
            className={`${!isExpanded && "scale-75"}`}
          >
            {isExpanded ? <ArrowLeft /> : <ArrowRight />}
          </button>
          <span></span>
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

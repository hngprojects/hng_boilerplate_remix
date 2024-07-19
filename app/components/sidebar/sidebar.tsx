import Logo from "../Logo";
import { useState } from "react";
import Navlink from "./navlink";
import { useTheme } from "~/context/ThemeContext";
import {
  Briefcase,
  Building2,
  Cpu,
  Monitor,
  SlidersHorizontal,
  User,
  ArrowLeft,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react";

export default function MobileSidebarComponent() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside
      className={`flex flex-col items-start gap-14 transition duration-200 ease-in-out ${
        isExpanded ? "w-full" : "w-fit px-2"
      } h-screen fixed z-10 text-primary-foreground bg-primary ${
        isDark ? "" : "dark"
      }`}
    >
      <div
        className={`flex w-full ${
          isExpanded
            ? "justify-between items-center"
            : "flex-col justify-center items-start gap-6"
        } px-[1.25rem] mt-2 relative`}
      >
        <Logo expanded={isExpanded} />
        <div
          className={`flex gap-3 ${
            isExpanded ? "items-center" : "flex-col justify-center items-start"
          }`}
        >
          <button
            onClick={toggleTheme}
            className={`${!isExpanded && "scale-75"}`}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className={`${!isExpanded && "scale-75"}`}
          >
            {isExpanded ? <ArrowLeft /> : <ArrowRight />}
          </button>
        </div>
      </div>

      <nav>
        <ul className="flex flex-col gap-[13px]">
          <Navlink path="/" text="Home" icon={<User />} expanded={isExpanded} />
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

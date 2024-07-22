import { NavLink } from "@remix-run/react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  mainMenuItems,
  organizationItems,
  settingsMenuItems,
  type MenuItem,
} from "./SideNarBarItems";

export function AdminSideNavBar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const renderMenuItem = (item: MenuItem) => (
    <NavLink
      key={item.name}
      to={item.to}
      className={({ isActive }) =>
        `flex items-center justify-between rounded-md p-2 ${isActive ? "bg-[#F97316] text-white" : "text-black hover:bg-[#F97316] hover:text-white"} `
      }
    >
      <div className="flex items-center">
        {item.icon && (
          <img src={item.icon} alt={item.name} className="mr-2 h-5 w-5" />
        )}
        {item.name}
      </div>
      {item.rightIcon && (
        <img src={item.rightIcon} alt="right icon" className="h-5 w-5" />
      )}
    </NavLink>
  );

  return (
    <nav className="h-screen w-64 bg-[#FDFDFD] max-lg:hidden">
      {!isSettingsOpen && (
        <div className="flex items-center p-4">
          <img src="/icons/shadcn.png" alt="Logo" className="mr-2 h-8 w-8" />
          <h1 className="text-xl font-bold">Shadcn</h1>
        </div>
      )}

      {isSettingsOpen ? (
        <div className="p-4">
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="mb-4 flex items-center rounded-md p-2 hover:bg-[#F97316] hover:text-white"
          >
            <img
              src="/icons/settingsback.png"
              alt="Back"
              className="mr-2 h-5 w-5"
            />
            Settings
          </button>

          <div className="mb-4">
            {settingsMenuItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.name}>
                      <AccordionTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-[#F97316] hover:text-white">
                        <div className="flex items-center">
                          {item.icon && (
                            <img
                              src={item.icon}
                              alt={item.name}
                              className="mr-2 h-5 w-5"
                            />
                          )}
                          {item.name}
                        </div>
                        {item.rightIcon && (
                          <img
                            src={item.rightIcon}
                            alt="right icon"
                            className="h-5 w-5"
                          />
                        )}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.subItems.map((subItem) =>
                          renderMenuItem(subItem),
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  renderMenuItem(item)
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h2 className="mb-2 font-bold">Organization</h2>
            {organizationItems.map((item) => renderMenuItem(item))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 p-4">
          {mainMenuItems.map((item) =>
            item.name === "Settings" ? (
              <button
                key={item.name}
                onClick={() => setIsSettingsOpen(true)}
                className="flex items-center rounded-md p-2 text-black hover:bg-[#F97316] hover:text-white"
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mr-2 h-5 w-5"
                  />
                )}
                {item.name}
              </button>
            ) : (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center rounded-md p-2 ${
                    isActive
                      ? "bg-[#F97316] text-white"
                      : "text-black hover:bg-[#F97316] hover:text-white"
                  } `
                }
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mr-2 h-5 w-5"
                  />
                )}
                {item.name}
              </NavLink>
            ),
          )}
        </div>
      )}
    </nav>
  );
}

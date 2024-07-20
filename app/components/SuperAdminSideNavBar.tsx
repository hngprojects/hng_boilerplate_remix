import { Link, useLocation } from "@remix-run/react";
import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const SuperAdminSideNavBar: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation();

  const mainMenuItems = [
    {
      name: "Dashboard",
      icon: "/icons/dashboard.png",
      path: "/admin/dashboard",
    },
    { name: "Products", icon: "/icons/products.png", path: "/admin/products" },
    { name: "Users", icon: "/icons/users.png", path: "/admin/users" },
    { name: "Email Template", icon: "/icons/email.png", path: "/admin/email" },
    {
      name: "Squeeze Pages",
      icon: "/icons/squeeze.png",
      path: "/admin/squeeze-pages",
    },
    {
      name: "Waitlist Page",
      icon: "/icons/waitlist.png",
      path: "/admin/waitlist-page",
    },
    { name: "Settings", icon: "/icons/settings.png" },
  ];

  const settingsMenuItems = [
    { name: "Profile", path: "/admin/settings/profile" },
    {
      name: "General",
      icon: "/icons/general.png",
      path: "/admin/settings/general",
    },
    {
      name: "Account Security",
      icon: "/icons/account.png",
      path: "/admin/settings/account",
      subItems: [
        {
          name: "Privacy Settings",
          icon: "/icons/privacy.png",
          path: "/admin/settings/account/privacy",
        },
        {
          name: "Connected Accounts",
          icon: "/icons/connected.png",
          path: "/admin/settings/account/connected",
        },
      ],
    },
    {
      name: "Notification",
      icon: "/icons/notification.png",
      path: "/admin/settings/notification",
      subItems: [
        {
          name: "Privacy Settings",
          icon: "/icons/privacy.png",
          path: "/admin/settings/notification/privacy",
        },
        {
          name: "Connected Account",
          icon: "/icons/connected.png",
          path: "/admin/settings/notification/connected",
        },
        {
          name: "Two Factor Authentication",
          icon: "/icons/two.png",
          path: "/admin/settings/notification/Auth",
        },
        {
          name: "Password Change",
          icon: "/icons/password.png",
          path: "/admin/settings/notification/password",
        },
      ],
    },
    {
      name: "Payment Information",
      icon: "/icons/payment.png",
      rightIcon: "/icons/accordion.png",
      path: "/admin/settings/payment",
    },
    {
      name: "Data and Privacy",
      icon: "/icons/data.png",
      path: "/admin/settings/privacy",
    },
    {
      name: "Language and Region",
      icon: "/icons/region.png",
      path: "/admin/settings/language",
    },
  ];

  const organizationItems = [
    {
      name: "Members",
      icon: "/icons/members.png",
      rightIcon: "/icons/accordion.png",
      path: "/admin/settings/organization/members",
    },
    {
      name: "Roles and Permissions",
      icon: "/icons/roles.png",
      rightIcon: "/icons/accordion.png",
      path: "/admin/settings/organization/roles",
    },
    {
      name: "Integration",
      icon: "/icons/integration.png",
      rightIcon: "/icons/accordion.png",
      path: "/admin/settings/organization/integration",
    },
  ];

  return (
    <div className="h-screen w-64 bg-[#FDFDFD]">
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
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`flex items-center rounded-md p-2 pl-8 ${
                              location.pathname === subItem.path
                                ? "bg-[#F97316] text-white"
                                : "text-black hover:bg-[#F97316] hover:text-white"
                            }`}
                          >
                            <img
                              src={subItem.icon}
                              alt={subItem.name}
                              className="mr-2 h-4 w-4"
                            />
                            {subItem.name}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between rounded-md p-2 ${
                      location.pathname === item.path
                        ? "bg-[#F97316] text-white"
                        : "text-black hover:bg-[#F97316] hover:text-white"
                    }`}
                  >
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
                        alt="Right Icon"
                        className="h-5 w-5"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h2 className="mb-2 font-bold">Organization</h2>
            {organizationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center justify-between rounded-md p-2 ${
                  location.pathname === item.path
                    ? "bg-[#F97316] text-white"
                    : "text-black hover:bg-[#F97316] hover:text-white"
                }`}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="mr-2 h-5 w-5"
                  />
                  {item.name}
                </div>
                <img
                  src={item.rightIcon}
                  alt="Right Icon"
                  className="h-5 w-5"
                />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 p-4">
          {mainMenuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path || "#"}
              className={`flex items-center rounded-md p-2 ${
                location.pathname === item.path ||
                (item.name === "Settings" && isSettingsOpen)
                  ? "bg-[#F97316] text-white"
                  : "text-black hover:bg-[#F97316] hover:text-white"
              }`}
              onClick={() =>
                item.name === "Settings" && setIsSettingsOpen(true)
              }
            >
              <img src={item.icon} alt={item.name} className="mr-2 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuperAdminSideNavBar;

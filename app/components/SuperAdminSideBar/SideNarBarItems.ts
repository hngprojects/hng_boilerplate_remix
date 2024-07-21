import type { LinkProps } from "@remix-run/react";

export type MenuItem = {
  name: string;
  icon?: string;
  to: LinkProps["to"];
  rightIcon?: string;
  subItems?: SubMenuItem[];
};

export type SubMenuItem = {
  name: string;
  icon: string;
  to: LinkProps["to"];
};

export const mainMenuItems: MenuItem[] = [
  { name: "Dashboard", icon: "/icons/dashboard.png", to: "/admin/dashboard" },
  { name: "Products", icon: "/icons/products.png", to: "/admin/products" },
  { name: "Users", icon: "/icons/users.png", to: "/admin/users" },
  { name: "Email Template", icon: "/icons/email.png", to: "/admin/email" },
  {
    name: "Squeeze Pages",
    icon: "/icons/squeeze.png",
    to: "/admin/squeeze-pages",
  },
  {
    name: "Waitlist Page",
    icon: "/icons/waitlist.png",
    to: "/admin/waitlist-page",
  },
  { name: "Settings", icon: "/icons/settings.png", to: "#" },
];

export const settingsMenuItems: MenuItem[] = [
  { name: "Profile", to: "/admin/settings/profile" },
  {
    name: "General",
    icon: "/icons/general.png",
    to: "/admin/settings/general",
  },
  {
    name: "Account Security",
    icon: "/icons/account.png",
    to: "/admin/settings/account",
    subItems: [
      {
        name: "Privacy Settings",
        icon: "/icons/privacy.png",
        to: "/admin/settings/account/privacy",
      },
      {
        name: "Connected Accounts",
        icon: "/icons/connected.png",
        to: "/admin/settings/account/connected",
      },
    ],
  },
  {
    name: "Notification",
    icon: "/icons/notification.png",
    to: "/admin/settings/notification",
    subItems: [
      {
        name: "Privacy Settings",
        icon: "/icons/privacy.png",
        to: "/admin/settings/notification/privacy",
      },
      {
        name: "Connected Account",
        icon: "/icons/connected.png",
        to: "/admin/settings/notification/connected",
      },
      {
        name: "Two Factor Authentication",
        icon: "/icons/two.png",
        to: "/admin/settings/notification/Auth",
      },
      {
        name: "Password Change",
        icon: "/icons/password.png",
        to: "/admin/settings/notification/password",
      },
    ],
  },
  {
    name: "Payment Information",
    icon: "/icons/payment.png",
    rightIcon: "/icons/accordion.png",
    to: "/admin/settings/payment",
  },
  {
    name: "Data and Privacy",
    icon: "/icons/data.png",
    to: "/admin/settings/privacy",
  },
  {
    name: "Language and Region",
    icon: "/icons/region.png",
    to: "/admin/settings/language",
  },
];

export const organizationItems: MenuItem[] = [
  {
    name: "Members",
    icon: "/icons/members.png",
    rightIcon: "/icons/accordion.png",
    to: "/admin/settings/organization/members",
  },
  {
    name: "Roles and Permissions",
    icon: "/icons/roles.png",
    rightIcon: "/icons/accordion.png",
    to: "/admin/settings/organization/roles",
  },
  {
    name: "Integration",
    icon: "/icons/integration.png",
    rightIcon: "/icons/accordion.png",
    to: "/admin/settings/organization/integration",
  },
];

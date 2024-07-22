import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { ReactNode } from "react";

import { AdminSideNavBar } from "~/components/SuperAdminSideBar/SuperAdminSideNavBar";
import styles from "~/styles/global.css?url";

export const links = () => [{ rel: "stylesheet", href: styles }];

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex">
          <AdminSideNavBar />
          <main className="flex-1">{children}</main>
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

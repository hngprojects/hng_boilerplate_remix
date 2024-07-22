import { cssBundleHref } from "@remix-run/css-bundle";
import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { ReactNode } from "react";

 import FooterLight from "./components/ui/footerLight";
import { AdminSideNavBar } from "./components/SuperAdminSideBar/SuperAdminSideNavBar";
import { ModalProvider } from "./context/modalContext";
import styles from "./styles/global.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Layout({ children }: { children: ReactNode }) {
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
          <main className="flex-1">
            {children}
            {/* <FooterLight /> */}
          </main>
          ,
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <Outlet />;
    </ModalProvider>
  );
}

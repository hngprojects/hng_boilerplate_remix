import { cssBundleHref } from "@remix-run/css-bundle";
import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { ReactNode } from "react";

import FooterLight from "./components/ui/footerLight";
import Header from "./components/ui/header";
import styles from "./styles/global.css?url";
import InvoiceEmail from "./email/templates/invoice-email-temp/InvoiceEmail";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pagesWithNoFooter = ["/dashboard/password-settings"];
  const showFooter = !pagesWithNoFooter.includes(location.pathname);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

        <InvoiceEmail/>
        <div className="flex">
          <main className="flex-1">{children}</main>
          ,

        <div>
          <main>
            <Header />
            {children}
            {showFooter && <FooterLight />}
          </main>

          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

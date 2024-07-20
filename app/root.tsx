import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "./styles/global.css?url";
import { cssBundleHref } from "@remix-run/css-bundle";
import MobileSidebarComponent from "./components/sidebar/sidebar";
import { ThemeProvider } from "./context/ThemeContext";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider>
          <MobileSidebarComponent />
          {children}
        </ThemeProvider>
          <ScrollRestoration />
          <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "./styles/global.css?url";
import { cssBundleHref } from "@remix-run/css-bundle";
import { AnimatePresence, motion } from "framer-motion";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={{
              initial: { opacity: 0, y: -1000 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 1000 },
            }}
            initial="initial"
            animate="animate"
            exit="exit">
            {children}
          </motion.div>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

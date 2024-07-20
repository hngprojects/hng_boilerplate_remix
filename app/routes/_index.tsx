import type { MetaFunction } from "@remix-run/node";
// import { Button } from "~/components/ui/button";
import CookieConsent from "~/components/ui/CookieConsent/CookieConsent";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <CookieConsent/>
    </div>
  );
}

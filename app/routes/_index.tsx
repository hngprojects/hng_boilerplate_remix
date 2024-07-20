import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import MemberManagement from "~/components/MemberManagement";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MemberManagement />
  );
}

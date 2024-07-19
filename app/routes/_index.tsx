import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import WaitlistForm from "~/components/WaitList-Form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <h1>hello world</h1>
    </>
  );
}

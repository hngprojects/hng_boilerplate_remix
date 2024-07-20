import type { MetaFunction } from "@remix-run/node";

import WaitlistForm from "~/components/WaitListForm";

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
      <WaitlistForm />
    </>
  );
}

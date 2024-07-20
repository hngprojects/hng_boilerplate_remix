import { MetaFunction } from "@remix-run/react";
import Bio from "~/components/bio";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {

  return (
    <div>
      <Bio />
    </div>
  );
}
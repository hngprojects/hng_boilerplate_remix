import type { MetaFunction } from "@remix-run/node";

import Success from "~/components/success_page/Success";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {

  return (

      <div className="p-4 font-sans">
        <Success />
      </div>
  );
}

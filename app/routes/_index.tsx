import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import CardPlatform from "~/components/ui/card/card-platform";
import OtpAuth from "~/components/ui/otp/OtpAuth";
import { Input } from "~/types/otpauth";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const handleSubmit = (values: Input[]) => {
  console.log({ values });
};

export default function Index() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <Button>Hello</Button>
        </li>

        <li className="p-2">
          <CardPlatform
            logo="/images/g-drive-icon.svg"
            heading="Drive"
            description="Store, share, and collaborate on documents and files securely"
            containerClassName="max-w-[341px]"
          />
        </li>
        <li>
          <Link to="/integration">Integrations</Link>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <OtpAuth
        isModalOpen={openModal}
        setIsModalOpen={() => setOpenModal(!openModal)}
        inputs={[
          { name: "input1", value: "" },
          { name: "input2", value: "" },
          { name: "input3", value: "" },
          { name: "input4", value: "" },
          { name: "input5", value: "" },
          { name: "input6", value: "" },
        ]}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

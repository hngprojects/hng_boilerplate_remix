import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import CardPlatform from "~/components/ui/card/card-platform";
import OtpAuth from "~/components/ui/otp/OtpAuth";
import ReusableToolTip from "~/components/ui/tooltip/ReuseableToolTip";
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
        <Button>Hello</Button>
        <div>
          <Button onClick={() => setOpenModal(true)}>Open OTP modal</Button>
        </div>
        <div className="p-2">
          <CardPlatform
            logo="/images/g-drive-icon.svg"
            heading="Drive"
            description="Store, share, and collaborate on documents and files securely"
            containerClassName="max-w-[341px]"
          />
        </div>
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
        <li>
          <Link
            className="text-blue-700 underline visited:text-purple-900"
            to="/magic-success"
          >
            Magic Link Login Success
          </Link>
        </li>
      </ul>
      <OtpAuth
        isModalOpen={openModal}
        setIsModalOpen={() => setOpenModal(!openModal)}
        inputs={[
          { name: "input1", value: "" },
          { name: "input1", value: "" },
          { name: "input1", value: "" },
          { name: "input1", value: "" },
          { name: "input1", value: "" },
          { name: "input1", value: "" },
        ]}
        handleSubmit={handleSubmit}
      />
      <div className="flex gap-4">
        <ReusableToolTip
          triggerContent="Primary"
          body="A description goes here"
          colorVariant="primary"
          arrowPosition="top"
        />
        <ReusableToolTip
          triggerContent="Secondary"
          head="This is a heading"
          body="A description goes here and spans the length of 2 - 3 lines. Please keep your description brief for clarity."
          colorVariant="secondary"
          arrowPosition="bottom"
        />
        <ReusableToolTip
          triggerContent="Neutral"
          head="Another Heading"
          body="Here is some more detailed information."
          subtext="A sub-description goes here and spans the length of 2 - 3 lines. Please keep your description brief for clarity."
          colorVariant="neutral"
          arrowPosition="right"
        />
      </div>
    </div>
  );
}

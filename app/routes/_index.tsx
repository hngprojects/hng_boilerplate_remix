import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

import MenuButton from "~/components/sidebar/menu-button";
import MobileSidebarComponent from "~/components/sidebar/sidebar";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((previous) => !previous);
  }
  return (
    <div className="p-4 font-sans">
      <div className="fixed left-0 h-full">
        {isMenuOpen && <MobileSidebarComponent />}
      </div>
      <div className="fixed right-5 top-10 sm:hidden">
        <MenuButton
          IsMenuOpen={isMenuOpen}
          handleToggleMenu={handleToggleMenu}
        />
      </div>
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
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import AddUserContent from "~/components/modal/addUserModal";
import { Button } from "~/components/ui/button";
import Modal from "~/components/modal/modal";
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
  const [show, setShow] = useState(false);

  const toggleShow = (show: boolean) => {
    setShow(show);
  };
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
      </ul>
      <Button
        className="rounded bg-primary px-4 py-2 mt-4 text-white transition duration-200 hover:bg-primary"
        onClick={() => toggleShow(true)}
      >
        Add user
      </Button>
      {/* Toggle modal */}
      <Modal show={show} toggleShow={toggleShow}>
        <AddUserContent show={show} toggleShow={toggleShow}/>
      </Modal>
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
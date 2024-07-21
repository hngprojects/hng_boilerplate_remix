import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import CardPlatform from "~/components/ui/card/card-platform";
import Modal from "~/components/modal/modal";
import AddUserContent from "~/components/modal/addUserModal";
import DeleteUserContent from "~/components/modal/deleteUser";

export const meta: MetaFunction = () => {


  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [show, setShow] = useState(false);

  const toggleShow = (show: boolean) => {
    setShow(show);
  };
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
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
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        onClick={() => toggleShow(true)}
      >
        Open Modal
      </button>
      <Modal show={show} toggleShow={toggleShow}>
        {/* <AddUserContent toggleShow={toggleShow} /> */}
        <DeleteUserContent />
      </Modal>
    </div>
  );
}

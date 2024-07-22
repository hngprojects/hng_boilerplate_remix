import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";


import { useState } from "react";

import AddUserModal from "~/components/addUserModel/addUserModal";
import BlogPost from "~/components/BlogPost";
import HeroSection from "~/components/HeroSection";
import { Button } from "~/components/ui/button";
import CardPlatform from "~/components/ui/card/card-platform";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";
import OtpAuth from "~/components/ui/otp/OtpAuth";
import { useModal } from "~/context/modalContext";

import { Input } from "~/types/otpauth";
import FindSection from "~/components/pages/home/FindSection";
import HeroSection from "~/components/pages/home/HeroSection";
import HowSection from "~/components/pages/home/HowSection";
import TestimonialsSection from "~/components/pages/home/TestimonialsSection";
import UsersSection from "~/components/pages/home/UsersSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Boilerplate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [openModal, setOpenModal] = useState(false);
  const { handleOpen } = useModal();
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
      {/* ADDED THE MODAL HERE FOR TESTING USER PAGE NOT AVAILABLE, REMOVE AND ASSIGN TO THE PROPER PAGE */}
      <AddUserModal />
      {/* MODAL OPEN BUTTON< PLEASE REMOVE AND ASSIGN TO THE PROPER PAGE*/}
      <button
        onClick={handleOpen}
        className="rounded bg-orange-500 px-4 py-2 text-white"
      >
        Add New User
      </button>
    </div>
    <>
      <HeroSection />
      <UsersSection />
      <HowSection />
      <TestimonialsSection />
      <FindSection />
    </>
  );
}

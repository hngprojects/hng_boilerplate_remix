import type { MetaFunction } from "@remix-run/node";

import BlogPost from "~/components/BlogPost";
import HeroSection from "~/components/HeroSection";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogPost />
      <Footer />
    </div>
  );
}

{
  /* <div className="p-4 font-sans">
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
/> */
}

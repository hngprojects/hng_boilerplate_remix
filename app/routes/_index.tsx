import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

import CommentBox from "~/components/CommentBox";
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

const commentData: {
  userPicUrl: string;
  userDisplayName: string;
  userTagName: string;
  commentContent: string;
  likeCount: number;
  pubDate: string;
} = {
  userPicUrl: "../public/images/comment-user-pic.svg",
  userDisplayName: "Uduak Essien",
  userTagName: "Uduess",
  commentContent:
    "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
  pubDate: `02 Jan, 2020 Wed 02:30pm`,
  likeCount: 20,
};

export default function Index() {
  const [openModal, setOpenModal] = useState(false);

  return (
    // Comment Box Implemented in "/app/components/CommentBox"
    // Comment Box UI to be found on the "/comments" route
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
        <div className="p-2">
          <CommentBox
            userPicUrl={commentData.userPicUrl}
            userDisplayName={commentData.userDisplayName}
            userTagName={commentData.userTagName}
            commentContent={commentData.commentContent}
            pubDate={commentData.pubDate}
            likeCount={commentData.likeCount}
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

import React from "react";

export default function SocialSignin({
  msg,
  icon,
}: {
  msg: string;
  icon: string;
}) {
  return (
    <div
      className="border-2 border-[
gray-300 rounded-xl py-2 ps-4 pe-2 my-6 md:my-0"
    >
      <button className="flex items-center justify-center gap-4 w-[267px] h-12 text-center text-gray-900 bg-white  text-base   ">
        <img src={icon} />
        <p>{msg}</p>
      </button>
    </div>
  );
}

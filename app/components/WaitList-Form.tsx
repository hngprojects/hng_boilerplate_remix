// Import necessary modules
import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { Mail, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export const action: ActionFunction = async ({ request }) => {};

const WaitlistForm: React.FC = () => {
  const [form, formData] = useState({
    name: "",
    email: "",
  });
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen ">
      <div className="w-[623px] h-[178px] mx-auto flex flex-col items-center">
        <div className="flex gap-2 items-center">
          <span className="p-2 text-green-700">
            <CheckCircle2 color="green" />
          </span>{" "}
          <p className="text-lg font-medium">Deployment made easy</p>{" "}
        </div>
        <h1 className="font-bold text-4xl text-black/85 text-center">
          You can level up your Saas production today
        </h1>
        <p className="text-xl text-center"></p>
      </div>
      <Form
        method="post"
        className="w-[510px] h-[320px] p-2  rounded-tl-lg space-y-6 border border-gray-200 opacity-100"
      >
        <div className="w-[490px] h-[90px] gap-[14.4px]">
          <label
            htmlFor="name"
            className="block text-[19.4px] font-normal text-black"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue="Meghan Grace"
            className="w-[490px] px-3 h-[52.8px]  text-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-[19.4px] font-normal text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            name="email"
            placeholder="Enter email"
            className="w-[490px] px-3 h-[52.8px]  text-gray-400 border border-gray-300 rounded-md shadow-sm outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-[195.6px] mx-auto flex items-center justify-center px-4 h-[51.78px] bg-orange-500 text-white font-medium rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          <Mail className="mr-2" />
          Join the Waitlist
        </button>
      </Form>
    </div>
  );
};

export default WaitlistForm;

import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { CheckCircle2, Mail, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Input } from "./ui/input";

interface ActionData {
  error?: string;
  success?: boolean;
}

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const action: ActionFunction = async ({ request }) => {
  const formInput = await request.formData();
  const name = formInput.get("name");
  const email = formInput.get("email");

  if (typeof name !== "string" || typeof email !== "string") {
    return { error: "Invalid form submission" };
  }

  if (!name || !validateEmail(email)) {
    return { error: "Name and valid email are required" };
  }

  return { success: true };
};

const WaitlistForm: React.FC = () => {
  const actionData = useActionData<ActionData>();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    setError(undefined);

    if (!name) {
      setError("Your Name is required to proceed");
    } else if (validateEmail(email)) {
      return true;
    } else {
      setError("Please input a valid email address");
    }

    event.preventDefault();
    return false;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <section className="mx-auto flex h-[178px] w-[320px] flex-col gap-2 lg:w-[623px]">
        <p className="flex items-center justify-center gap-2">
          <CheckCircle2 height={24} width={24} color="#2b9b5b" />
          <span className="text-sm font-normal text-[#191a15] lg:text-lg lg:font-medium">
            Deployment made easy
          </span>
        </p>
        <h1 className="text-center text-[24px] font-bold leading-[29.05px] text-[#525252] lg:text-4xl">
          You can level up your Saas production today
        </h1>
        <p className="text-center text-[16px] font-normal leading-[19.36px] text-[#525252] lg:text-xl">
          Join our waitlist and get early access to our boilerplate
        </p>
      </section>
      {actionData?.success ? (
        <section className="waitlist-success h-[414.57px] w-[383.34px] lg:h-[406.8px] lg:w-[703.2px]">
          <div className="relative flex flex-col items-center justify-center">
            <img src="/Vector.png" className="h-[179px] w-[177px] opacity-25" />

            <span className="thumbs-up left-10 top-2">
              <ThumbsUp size={20} />
            </span>
          </div>
          <h3 className="text-center text-[24px] font-bold leading-[29.05px] text-[#525252] lg:text-[28px] lg:font-semibold lg:leading-[33.89px]">
            You&apos;re all signed up!
          </h3>
        </section>
      ) : (
        <section
          className={`form-section ${
            mounted && error
              ? "h-[406px] w-[383.34px] gap-[10px] p-[10px] lg:h-[373.78px] lg:w-[510px]"
              : "h-[414.57px] w-[383.34px] flex-col items-center justify-center gap-5 rounded-md border p-7 lg:h-[320px] lg:w-[510px] lg:gap-6"
          }`}
        >
          <Form
            method="post"
            className="flex h-[218px] w-[320px] flex-col gap-6 lg:h-[204.2px] lg:w-[490px]"
            onSubmit={handleSubmit}
          >
            <div className="flex h-[97px] w-[320px] flex-col gap-[14.4px] lg:h-[90px] lg:w-[490px]">
              <label
                htmlFor="name"
                className="block py-2 text-[19.2px] font-normal leading-[23.24px] text-[#141414] lg:text-[19.4px]"
              >
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Meghan Grace"
                className="input_style"
              />
            </div>
            {mounted && error && (
              <p className="xs text-red-500">
                {error.includes("Name") && error}
              </p>
            )}
            <div className="flex h-[97px] w-[320px] flex-col gap-[14.4px] lg:w-[490px]">
              <label
                htmlFor="email"
                className="block pt-2 text-[19.2px] font-normal leading-[23.24px] text-[#141414] lg:text-[19.4px]"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter email"
                className="input_style"
              />
            </div>
            {mounted && error && (
              <p className="xs text-red-500">
                {error.includes("email") && error}
              </p>
            )}
            <button
              type="submit"
              className="mx-auto flex h-[52px] w-[182px] items-center justify-center gap-[9.6px] rounded-[7.2px] bg-[#f97316] px-[19.2px] py-[9.6px] text-sm font-bold leading-[28.8px] text-white shadow-sm lg:h-[51.78px] lg:w-[195.6px] lg:text-[16px] lg:font-medium"
            >
              <Mail size={20} />
              Join the Waitlist
            </button>
          </Form>
          {mounted && actionData?.success && (
            <p className="mt-2 text-green-500">
              Successfully joined the waitlist!
            </p>
          )}
        </section>
      )}
    </div>
  );
};

export default WaitlistForm;

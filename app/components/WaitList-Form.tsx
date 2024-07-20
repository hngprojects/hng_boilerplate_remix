import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { Mail, CheckCircle2, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input"; // Adjust the import path accordingly

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

  // for testing my backend endpoint 
  // try {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email }),
  //   });

  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   return { success: true };
  // } catch (error) {
  //   return { error: "Failed to submit the form" };
  // }
};

const WaitlistForm: React.FC = () => {
  const actionData = useActionData<ActionData>();
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let hasError = false;

    if (!name) {
      setError("Your Name is required to proceed");
      hasError = true;
    } else if (!validateEmail(email)) {
      setError("Please input a valid email address");
      hasError = true;
    } else {
      setError(null);
    }

    if (hasError) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    setSubmit(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="lg:w-[623px] w-[320px] h-[178px] mx-auto flex flex-col gap-2">
        <p className="flex items-center justify-center gap-2">
          <CheckCircle2 height={24} width={24} color="#2b9b5b" />
          <span className="lg:text-lg text-sm font-normal lg:font-medium text-[#191a15]">
            Deployment made easy
          </span>
        </p>
        <h1 className="font-bold lg:text-4xl text-[24px] leading-[29.05px] text-center text-[#525252]">
          You can level up your Saas production today
        </h1>
        <p className="lg:text-xl text-[16px] leading-[19.36px] font-normal text-center text-[#525252]">
          Join our waitlist and get early access to our boilerplate
        </p>
      </section>
      {
        submit ? (
          <section className="waitlist-success lg:w-[703.2px] w-[383.34px] lg:h-[406.8px] h-[414.57px]">
            <div className="relative flex flex-col items-center justify-center">
              <img src="/Vector.png" className="w-[177px] h-[179px] lg:h-[178px]" />
              <span className="thumbs-up"><ThumbsUp size={20} /></span>
            </div>
            <h3 className="lg:text-[28px] text-[24px] lg:leading-[33.89px] leading-[29.05px] font-bold lg:font-semibold text-center text-[#525252]">
              You're all signed up!
            </h3>
          </section>
        ) : (
          <section className={`form-section ${mounted && error ? "h-[406px] lg:w-[510px] gap-[10px] lg:h-[373.78px] p-[10px] w-[383.34px]" : "lg:w-[510px] w-[383.34px] lg:h-[320px] h-[414.57px] gap-[10px] lg:gap-6"}`}>
            <Form method="post" className="lg:w-[490px] w-[320px] h-[218px] lg:h-[204.2px] flex flex-col gap-6">
              <div className="lg:w-[490px] lg:h-[90px] h-[97px] w-[320px] gap-[14.4px] flex flex-col">
                <label htmlFor="name" className="block lg:text-[19.4px] text-[19.2px] py-2 leading-[23.24px] font-normal text-[#141414]">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Meghan Grace"
                  className="input_style"
                />
              </div>
              {mounted && error && (
                <p className="error-text">
                  {error.includes("Name") && error}
                </p>
              )}
              <div className="lg:w-[490px] h-[97px] w-[320px] gap-[14.4px] flex flex-col">
                <label htmlFor="email" className="block lg:text-[19.4px] pt-2 text-[19.2px] leading-[23.24px] font-normal text-[#141414]">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="input_style"
                />
              </div>
              {mounted && error && (
                <p className="error-text">
                  {error.includes("email") && error}
                </p>
              )}
               <button
            type="submit"
            onClick={handleSubmit}
            className="w-[182px] h-[52px] lg:w-[195.6px] mx-auto flex items-center justify-center lg:h-[51.78px] bg-[#f97316] text-white text-sm lg:text-[16px] leading-[28.8px] gap-[9.6px] py-[9.6px] px-[19.2px] font-bold lg:font-medium rounded-[7.2px] shadow-sm"
          >
            <Mail size={20} />
            Join the Waitlist
          </button>
            </Form>
            {mounted && actionData?.success && (
              <p className="success-text mt-2">
                Successfully joined the waitlist!
              </p>
            )}
          </section>
        )
      }
    </div>
  );
};

export default WaitlistForm;

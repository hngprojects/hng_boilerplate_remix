import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import { Mail, CheckCircle2, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";

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
      <section className="w-full max-w-lg mx-auto flex flex-col gap-2 p-4 bg-card text-card-foreground rounded-lg border border-border shadow-md">
        <p className="flex items-center justify-center gap-2 text-primary-foreground">
          <CheckCircle2 height={24} width={24} color="var(--primary)" />{" "}
          <span className="text-lg font-medium">Deployment made easy</span>
        </p>
        <h1 className="font-bold text-2xl text-center text-primary">
          You can level up your Saas production today
        </h1>
        <p className="text-xl text-center text-muted">
          Join our waitlist and get early access to our boilerplate
        </p>
      </section>
      {
        submit ? (
          <section className="w-full max-w-lg mx-auto flex flex-col items-center justify-center gap-6 rounded-lg border border-border p-4 bg-card">
            <div className="flex flex-col items-center justify-center relative w-44 h-44">
              <img src="/Vector.png" className="w-full opacity-25" />
              <span className="absolute top-20 left-10 -rotate-12 text-primary">
                <ThumbsUp size={20} />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-center text-primary">You're all signed up!</h3>
          </section>
        ) : (
          <section className={`w-full max-w-lg mx-auto flex flex-col gap-6 rounded-lg border border-border p-4 bg-card ${mounted && error ? 'h-[406px]' : 'h-[414.57px]'}`}>
            <Form className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="text-lg text-primary-foreground">
                  Name
                </label>
                <input
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
                <p className="text-red-500 text-xs">
                  {error.includes("Name") && error}
                </p>
              )}
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="text-lg text-primary-foreground">
                  Email
                </label>
                <input
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
                <p className="text-red-500 text-xs">
                  {error.includes("email") && error}
                </p>
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-44 h-12 mx-auto flex items-center justify-center bg-accent text-primary-foreground text-sm font-bold rounded-lg shadow-sm"
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
        )
      }
    </div>
  );
};

export default WaitlistForm;

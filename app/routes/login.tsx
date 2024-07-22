"use client";

import { ActionFunctionArgs } from "@remix-run/node";
import { Form, json, redirect, useActionData } from "@remix-run/react";
import { EyeIcon, EyeOff } from "lucide-react";
import facebook from "public/icons/facebook.svg";
import google from "public/icons/google.svg";
import { useState } from "react";

import Header from "~/components/ui/header";
import SocialSignin from "~/components/ui/socialSignin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData<typeof action>();

  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
    setShowPassword((previousState) => !previousState);
  };

  return (
    <div className="">
      <Header />

      <div className="flex w-full flex-col items-center justify-center py-6 md:h-auto">
        <Form className="w-[70%] rounded-lg lg:w-[552px]" method="post">
          <div className="flex flex-col items-center justify-center" id="login">
            <div className="text-center">
              <header
                className={
                  "font-inter mb-4 h-6 text-[28px] font-semibold text-secondary-foreground lg:w-[552px]"
                }
              >
                Login
              </header>

              <p className="p-3 text-xl font-normal leading-6">
                {" Welcome Back, you've been missed! "}
              </p>
            </div>

            <br />
            <div className="w-full items-center justify-between gap-6 pb-0 pt-6 md:pb-1 lg:flex">
              <SocialSignin msg="Sign in with Google" icon={google} />
              <SocialSignin msg="Sign in with Facebook" icon={facebook} />
            </div>

            <div className="flex w-full flex-col">
              <p className="mb-2 text-xl font-normal leading-6 lg:mt-6">
                Email
              </p>
              <div className="#CBD5E1] rounded-xl border-2 border-gray-300 py-5 pe-6 ps-4">
                <input
                  type="email"
                  className="h-[22px] bg-transparent text-lg font-normal leading-5 text-gray-600 outline-none"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <p className="text-sm text-destructive">
                {actionData?.errors?.email ? (
                  <em>{actionData?.errors.email}</em>
                ) : undefined}
              </p>
            </div>

            <br />

            <div className="flex w-full flex-col">
              <p className="mb-2 text-xl font-normal leading-6">Password</p>
              <div className="relative rounded-xl border-2 border-gray-300 py-5 pe-6 ps-4">
                <input
                  className="h-[22px] bg-transparent text-lg font-normal leading-5 text-gray-600 outline-none"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <div
                  className="absolute inset-y-0 right-0 border-none px-3 pt-5 text-secondary-foreground outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500" />
                  ) : (
                    <EyeIcon size={20} className="text-gray-500" />
                  )}
                </div>
              </div>
              <p className="text-sm text-destructive">
                {actionData?.errors?.password ? (
                  <em>{actionData?.errors.password}</em>
                ) : undefined}
              </p>
            </div>
            <div className="mx-2 w-full justify-between text-primary-foreground md:flex">
              <div className="mt-2 flex gap-2">
                <input type="checkbox" id="login-check" />
                <div className="text-secondary-foreground"> Remember Me</div>
              </div>
              <div className="mt-2 cursor-pointer text-gray-900">
                Forgot Password?
              </div>
            </div>

            <br />
            <div className="flex w-full flex-col gap-8">
              <button
                className="focus:shadow-outline w-full rounded-xl border-2 border-gray-300 bg-primary py-5 pe-6 ps-4 text-base font-medium text-primary-foreground hover:border-primary hover:bg-primary-foreground hover:text-primary focus:outline-none"
                type="submit"
              >
                Login
              </button>

              <button
                className="focus:shadow-outline h-[64px]w-full rounded-xl border-2 border-gray-300 bg-primary-foreground py-5 pe-6 ps-4 font-medium text-gray-900 hover:text-primary focus:outline-none"
                type="submit"
              >
                Sign in with magic link
              </button>
            </div>
            <br />
            <div className="flex items-center justify-center gap-2 text-center">
              <p className="text-secondary-foreground">
                {`Don't have an account?`}{" "}
              </p>
              <a
                href="Sign Up"
                className="text-base font-bold leading-[120%] text-primary"
              >
                Sign Up
              </a>
            </div>
            <p className="text-center text-[13px]">
              By logging in, you agree to the{" "}
              <span className="text-base text-primary"> Terms of Service</span>{" "}
              and <span className="text-base text-primary">Private Policy</span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const errors = {
    email: "",
    password: "",
  };

  if (email.trim() == undefined || email == "") {
    errors.email = "Please enter your email address";
  }
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email";
  }

  if (password.trim() == undefined || password == "") {
    errors.email = "Please enter your password";
  }
  if (password.trim().length < 6) {
    errors.password = "Password should be at least 6 characters";
  }

  if (errors.email != "" || errors.password != "") {
    return json({ errors });
  }

  return redirect("/");
}

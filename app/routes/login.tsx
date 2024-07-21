"use client";
import { useState } from "react";
import facebook from "public/icons/facebook.svg";
import google from "public/icons/google.svg";
import SocialSignin from "~/components/ui/social_signin";
import { Form, json, redirect, useActionData } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { EyeIcon } from "lucide-react";
import { EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const actionData = useActionData<typeof action>();

  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full h-auto mt-24">
      {/* <Nav /> */}
      <div className="w-full  md:h-auto flex flex-col items-center justify-center py-6">
        <p className=""></p>
        <Form
          className="w-[80%] md:w-[70%] lg:w-[552px]   rounded-lg"
          method="post"
        >
          <div className="flex flex-col items-center justify-center" id="login">
            <div className="text-center">
              <header
                className={
                  "lg:w-[552px] h-6 mb-4 text-[28px] font-semibold text-black font-inter"
                }
              >
                Login
              </header>
              <p className="text-xl font-normal leading-6">
                {" "}
                Welcome Back, you've been missed!
              </p>
            </div>
            <br />
            <div className="w-full pt-6 pb-0 md:pb-1 lg:flex items-center justify-between gap-6  ">
              <SocialSignin msg="Sign in with Google" icon={google} />
              <SocialSignin msg="Sign in with Facebook" icon={facebook} />
            </div>

            <div className="w-full flex flex-col ">
              <p className="text-xl leading-6 font-normal mb-2 lg:mt-6">Email</p>
              <div
                className="py-5 ps-4 pe-6 border-2 border-gray-300
#CBD5E1] rounded-xl "
              >
                <input
                  type="email"
                  className="w-[366px] h-[22px] bg-transparent text-lg leading-5 font-normal text-
              gray-600 outline-none"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <p className="text-red-500 text-md italic">
                {actionData?.errors?.email ? (
                  <em>{actionData?.errors.email}</em>
                ) : null}
              </p>
            </div>
            <br />

            <div className="w-full flex flex-col ">
              <p className="text-xl leading-6 font-normal mb-2">Password</p>
              <div
                className="relative py-5 ps-4 pe-6 border-2 border-gray-300 rounded-xl"
              >
                <input
                  className="w-[366px] h-[22px] bg-transparent text-lg leading-5 font-normal text-
              gray-600 outline-none"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <div
                  className="absolute border-none outline-none inset-y-0 right-0 px-3 pt-5 text-black"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500" />
                  ) : (
                    <EyeIcon size={20} className="text-gray-500" />
                  )}
                </div>
              </div>
              <p className="text-red-500 text-xs italic">
                {actionData?.errors?.password ? (
                  <em>{actionData?.errors.password}</em>
                ) : null}
              </p>
            </div>

            <div className="w-full justify-between md:flex text-white mx-2">
              <div className="flex gap-2 mt-2">
                <input type="checkbox" id="login-check" />
                <div className="text-black"> Remember Me</div>
              </div>
              <div className="text-gray-900 mt-2 cursor-pointer">
                Forgot Password?
              </div>
            </div>

            <br />
            <div className="w-full flex flex-col gap-8">
              <button
                className="w-full py-5 ps-4 pe-6 border-2 border-gray-300 hover:border-orange-500 rounded-xl text-white bg-orange-500 hover:bg-white hover:text-orange-500 font-medium focus:outline-none focus:shadow-outline text-base "
                type="submit"
              >
                Login
              </button>

              <button
                className="w-full h-[64px] py-5 ps-4 pe-6 border-2 
                border-gray-300 rounded-xl text-gray-900 bg-white hover:bg-[] hover:text-orange-500 font-medium focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign in with magic link
              </button>
            </div>
            <br />
            <div className="flex text-center gap-2 items-center justify-center">
              <p className="text-black">{`Don't have an account?`} </p>
              <a
                href="Sign Up"
                className="text-base text-orange-500 leading-[120%] font-bold"
              >
                Sign Up
              </a>
            </div>
            <p className="text-center text-[13px]">
              By logging in, you agree to the{" "}
              <span className="text-orange-500 text-base">
                {" "}
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-orange-500 text-base">Private Policy</span>
            </p>
          </div>
        </Form>
      </div>

      {/* <Footer /> */}
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

  if (email.trim() == null || email == "") {
    errors.email = "Please enter your email address";
  }
  if (!email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (password.trim() == null || password == "") {
    errors.email = "Please enter your password";
  }
  if (password.length < 6) {
    errors.password = "Password should be at least 6 characters";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  return redirect("/");
}

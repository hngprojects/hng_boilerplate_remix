import { Link } from "@remix-run/react";

import Navbar from "../static-navbar/static-navbar";
import Footer from "../ui/footer";

interface PlaceholderLinkProperties {
  to: string;
  text: string;
}

function PlaceholderLink({ to, text }: PlaceholderLinkProperties) {
  return (
    <Link
      to={to}
      className="text-sm font-semibold leading-6 text-orange-600 md:text-lg"
    >
      {text}
    </Link>
  );
}

export default function ForgotPassword() {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-52 mt-52 w-full max-w-lg rounded-lg p-8">
        <h1 className="text-center text-2xl text-base font-semibold text-gray-900 sm:text-xl md:text-2xl">
          Forgot Password
        </h1>
        <p className="mb-8 mt-4 text-center text-lg text-sm font-normal text-gray-600 md:text-base">
          Enter the email address you used to create the account to receive
          instructions on how to reset your password.
        </p>
        <form className="space-y-6">
          <label className="block text-lg font-normal text-gray-700">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </label>
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-orange-500 py-3 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Send
          </button>
        </form>
        <div className="mt-6 flex items-center justify-center">
          <p className="mr-2 text-sm font-normal text-gray-600 md:text-xs">
            Remember your Password?
          </p>
          <PlaceholderLink to="/login" text="Login" />
        </div>
      </div>
      <Footer />
    </>
  );
}

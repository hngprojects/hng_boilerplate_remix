import Navbar from "../static-navbar/static-navbar";
import Footer from "../ui/footer";
import { Link } from "@remix-run/react";

interface PlaceholderLinkProps {
  to: string;
  text: string;
}

function PlaceholderLink({ to, text }: PlaceholderLinkProps) {
  return (
    <Link to={to} className="text-orange-600 font-semibold text-sm md:text-lg leading-6">
      {text}
    </Link>
  );
}

export default function ForgotPassword() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-lg mx-auto mt-52 mb-52 p-8 rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-900 text-center md:text-2xl text-base sm:text-xl">
          Forgot Password
        </h1>
        <p className="text-lg font-normal text-gray-600 text-center mt-4 mb-8 md:text-base text-sm">
          Enter the email address you used to create the account to receive instructions on how to reset your password.
        </p>
        <form className="space-y-6">
          <label className="block text-lg font-normal text-gray-700">
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="block w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Send
          </button>
        </form>
        <div className="flex justify-center items-center mt-6">
          <p className="text-sm font-normal text-gray-600 mr-2 md:text-xs">
            Remember your Password?
          </p>
          <PlaceholderLink to="/login" text="Login" />
        </div>
      </div>
      <Footer />
    </>
  );
}

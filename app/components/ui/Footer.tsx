import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <div className="bg-[#FAFAFA]">
      <footer className="w-full px-8 pb-8 pt-16 text-gray-700 md:px-24">
        <div className="mb-6 flex flex-row flex-wrap gap-12 lg:items-start lg:justify-evenly lg:gap-4">
          <div className="w-full px-8 pb-8 pt-16 text-gray-700 md:px-24">
            <h3 className="mb-5 text-lg font-bold">BoilerPlate</h3>
            <p className="text-sm font-semibold text-gray-800">
              Logo subject details and address
            </p>
          </div>

          <div className="order-2 lg:flex-1">
            <h3 className="mb-5 text-lg font-bold">Navigation</h3>
            <ul className="space-y-2 text-base font-semibold">
              <li>
                <Link to="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-900">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/job-listing" className="hover:text-gray-900">
                  Job Listing
                </Link>
              </li>
              <li>
                <Link to="/feature-updates" className="hover:text-gray-900">
                  Feature updates
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-3 lg:flex-1">
            <h3 className="mb-5 text-lg font-bold">Support</h3>
            <ul className="space-y-2 text-base font-semibold">
              <li>
                <Link to="/help-center" className="hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/waiting-list" className="hover:text-gray-900">
                  Waiting list
                </Link>
              </li>
              <li>
                <Link to="/pricing-experience" className="hover:text-gray-900">
                  Pricing Experience
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-4 lg:flex-1">
            <h3 className="mb-5 text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-base font-semibold">
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-gray-900"
                >
                  Terms and condition
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-last ml-[-6] md:hidden lg:flex-1">
            <h3 className="mb-5 text-lg font-bold">Follow Us</h3>
            <div className="mb-4 flex space-x-1">
              <a
                href="#"
                className="rounded-full bg-[#f97316] p-1 text-xs text-white"
              >
                <img src="/twitter.svg" alt="instagram" className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="rounded-full bg-[#f97316] p-1 text-xs text-white"
                aria-label="YouTube"
              >
                <img
                  src="/youtube.svg"
                  alt="youtube"
                  className="h-4 w-4 bg-[#f97316] text-white"
                />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#f97316] p-1 text-xs text-white"
                aria-label="Instagram"
              >
                <img src="/instagram.svg" alt="instagram" className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#f97316] p-1 text-xs text-white"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.svg" alt="linkedin" className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#f97316] p-1 text-xs text-white"
                aria-label="Facebook"
              >
                <img src="/facebook.svg" alt="facebook" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="order-1 mb-8 mt-[-8] flex-1 text-center md:order-last md:mt-[0] lg:mb-0 lg:text-left">
            <h3 className="mb-4 text-lg font-bold">Sign Up For Newsletter</h3>
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="rounded-l-md border border-gray-300 bg-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="-ml-3 rounded-l-md rounded-r-md bg-[#f97316] px-4 py-2 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#f97316]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
      <hr className="h-0.5 bg-gray-800" />
      <div className="px-8 pb-10 pt-4 text-sm md:px-24 lg:flex lg:items-center lg:justify-between">
        <div className="mb-4 hidden space-x-1 lg:mb-0 lg:flex">
          <a
            href="#"
            className="rounded-full bg-[#f97316] p-2 text-xs text-white"
            aria-label="Twitter"
          >
            <img src="/twitter.svg" alt="twitter" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#f97316] p-2 text-xs text-white"
            aria-label="YouTube"
          >
            <img src="/youtube.svg" alt="youtube" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#f97316] p-2 text-xs text-white"
            aria-label="Instagram"
          >
            <img src="/instagram.svg" alt="instagram" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#f97316] p-2 text-xs text-white"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.svg" alt="linkedin" className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="rounded-full bg-[#f97316] p-2 text-xs text-white"
            aria-label="Facebook"
          >
            <img src="/facebook.svg" alt="facebook" className="h-5 w-5" />
          </a>
        </div>

        <p className="mb-4 flex items-center justify-center gap-2 text-center font-bold text-gray-300 lg:mb-0">
          <span>
            <img src="/copyright.svg" alt="copyright" className="h-4 w-4" />
          </span>{" "}
          2024 All Rights Reserved
        </p>

        <div className="hidden space-x-4 lg:flex">
          <Link to="/privacy-policy" className="font-semibold text-black">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="font-semibold text-black">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}

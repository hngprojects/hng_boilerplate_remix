import { Link } from "@react-email/components";

import Instagram from "../icons/instagram";
import LinkedIn from "../icons/linkedIn";
import Reddit from "../icons/reddit";
import Tiktok from "../icons/tiktok";
import Twitter from "../icons/twitter";

export default function Footer() {
  return (
    <div className="m-auto w-[4/5] justify-center bg-[#F3EFEF] px-[48px] py-[32px] leading-[normal] tracking-[normal] lg:w-auto">
      <section className="mx-auto flex flex-col items-start justify-start gap-7 text-left text-sm">
        <div className="flex w-full items-center justify-center gap-[33px]">
          <Link>
            <Twitter />
          </Link>
          <Link>
            <Instagram />
          </Link>
          <Link>
            <Tiktok />
          </Link>
          <Link>
            <Reddit />
          </Link>
          <Link>
            <LinkedIn />
          </Link>
        </div>
        <p className="text-[14px] text-[#5B5B5D]">
          {`Thank you for choosing Boilerplate.com. Need help? `}
          <Link
            className="font-semibold text-black underline hover:no-underline"
            href="#"
          >
            Contact our customer support
          </Link>
        </p>
        <div className="h-0 w-full border-t border-dashed border-[#5B5B5D]"></div>
        <p className="flex flex-col gap-3 text-[14px] text-[#5B5B5D]">
          <span className="block">
            You are receiving this email because you signed up at
            Boilerplate.com. Want to change how you receive these emails?
          </span>
          <span>
            You can
            <Link
              className="pl-1 font-semibold text-black underline hover:no-underline"
              href="#"
            >
              Update your preference
            </Link>
            or
            <Link
              className="pl-1 font-semibold text-black underline hover:no-underline"
              href="#"
            >
              Unsuscribe from this list.
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
}

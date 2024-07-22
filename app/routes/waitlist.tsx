import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function Waitlist() {
  return (
    <div className="bg-white px-6 py-[60px] text-[#525252] sm:px-12 lg:px-28 lg:py-[133px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <header className="mb-[64px] grid w-full place-items-center text-center lg:mb-[100px]">
          <h1 className="text-[28px] font-bold text-[#525252] lg:text-[60px]">
            Contact Our Team
          </h1>
          <p className="text-[18px] text-[#525252] lg:text-[28px]">{`Let's Build Your Product Together`}</p>
        </header>
        <div className="grid gap-[50px] lg:grid-cols-[1.3fr_1fr] lg:gap-[100px]">
          <form className="flex flex-1 flex-col gap-[32px] rounded-[6px] lg:border-[1px] lg:border-[#52525233] lg:bg-[#fafafa] lg:p-8">
            <fieldset>
              <label
                htmlFor="name"
                className="mb-[4px] inline-block text-[14px] leading-[16px] lg:mb-[8px]"
              >
                Name
              </label>
              <Input
                name="name"
                id="name"
                type="text"
                className="h-[48px] bg-[#fefefe] lg:h-[64px]"
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="email"
                className="mb-[4px] inline-block text-[14px] leading-[16px] lg:mb-[8px]"
              >
                Email
              </label>
              <Input
                name="email"
                id="email"
                type="email"
                className="h-[48px] bg-[#fefefe] lg:h-[64px]"
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="phone"
                className="mb-[4px] inline-block text-[14px] leading-[16px] lg:mb-[8px]"
              >
                Phone
              </label>
              <Input
                name="phone"
                type="tel"
                id="phone"
                className="h-[48px] bg-[#fefefe] lg:h-[64px]"
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="message"
                className="mb-[4px] inline-block text-[14px] leading-[16px] lg:mb-[8px]"
              >
                Message
              </label>
              <Textarea
                name="phone"
                id="phone"
                className="h-[169px] resize-none bg-[#fefefe]"
              />
            </fieldset>
            <Button size="lg">Send</Button>
          </form>
          <div className="max-w-[420px]">
            <div className="mb-[15px] rounded-[6px] border-[1px] border-[#52525233] bg-[#fafafa] p-[24px] lg:p-[32px]">
              <h1 className="mb-[16px] text-[20px] font-bold text-[#525252] lg:mb-[33px] lg:text-[28px]">
                United Kingdom
              </h1>
              <p className="mb-[16px] text-[#525252] lg:mb-[33px]">
                Business hours : 8am - 6pm
              </p>
              <div className="flex flex-col gap-[24px]">
                <div className="flex items-center gap-[16px] text-[14px] text-[#525252] lg:text-[16px]">
                  <figure className="shrink-0 self-start">
                    <img
                      src="/icons/location-icon.svg"
                      alt="Location"
                      className="h-[40px] w-[40px]"
                    />
                  </figure>
                  <div className="leading-[20px]">
                    10111, hornchurch, london, United kingdom
                  </div>
                </div>
                <div className="flex items-center gap-[16px] text-[14px] leading-[24px] text-[#525252] lg:text-[16px]">
                  <figure className="shrink-0 self-start">
                    <img
                      src="/icons/phone-icon.svg"
                      alt="Phone"
                      className="h-[40px] w-[40px]"
                    />
                  </figure>
                  <a href="tel:+4403989898787 ">+4403989898787 </a>
                </div>
                <div className="flex items-center gap-[16px] text-[14px] leading-[24px] text-[#525252] lg:text-[16px]">
                  <figure className="shrink-0">
                    <img
                      src="/icons/email-icon.svg"
                      alt="Email"
                      className="h-[40px] w-[40px]"
                    />
                  </figure>
                  <div>
                    Email:{" "}
                    <a href="mailto:supportteam@gmail.com">
                      supportteam@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-[16px] text-[14px] leading-[24px] text-[#525252] lg:text-[16px]">
                  <figure className="shrink-0">
                    <img
                      src="/icons/twitter-icon.svg"
                      alt="Twitter"
                      className="h-[40px] w-[40px]"
                    />
                  </figure>
                  <div>Twitter: @boilerplate234</div>
                </div>
                <div className="flex items-center gap-[16px] text-[14px] leading-[24px] text-[#525252] lg:text-[16px]">
                  <figure className="shrink-0">
                    <img
                      src="/icons/instagram-icon.svg"
                      alt="Instagram"
                      className="h-[40px] w-[40px]"
                    />
                  </figure>
                  <div>Instagram: @boilerplate234</div>
                </div>
                <div className="flex items-center gap-[16px] text-[14px] leading-[24px] text-[#525252] lg:text-[16px]">
                  <figure className="shrink-0">
                    <img
                      src="/icons/linkedin-icon.svg"
                      alt="Linkedin"
                      className="h-[40px] w-[40px]"
                    />
                  </figure>
                  <div>Linkedin: @boilerplate234</div>
                </div>
              </div>
            </div>
            <div className="rounded-[6px] border-[1px] border-[#52525233] bg-[#fafafa] p-[24px] lg:p-[32px]">
              <div className="mb-[4px] flex justify-between">
                <h1 className="text-[20px] font-semibold text-[#F97316] underline lg:text-[28px] lg:font-bold">
                  FAQS
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_662_22177)">
                    <path
                      d="M0 14.7932V7.14014H10.101V0.966675L20 10.9667L10.101 20.9667V14.7932H0Z"
                      fill="#F97316"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_662_22177">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-[#525252] lg:text-[18px]">
                See and get answers to the most frequent asked questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

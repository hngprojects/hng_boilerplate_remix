import { ChevronDown, ChevronRight, SearchIcon, SlashIcon } from "lucide-react";

import Header from "~/components/ui/header";

const items = [
  { text: "What is EcoClean?" },
  { text: "How does EcoClean work?" },
  { text: "What are the key features of EcoClean?" },
  { text: "Who can benefit from using EcoClean?" },
  { text: "What are the system requirements for EcoClean?" },
  { text: "How do I use EcoClean?" },
  { text: "How do I store EcoClean?" },
  { text: "How much does EcoClean cost?" },
  { text: "Are there any discounts available?" },
];

function Faq() {
  return (
    <div className="bg-white">
      <Header />
      <section className="mx-auto w-full p-2 md:w-[900px] lg:w-[1200px]">
        <div className="hidden text-[16px] font-normal text-[#000000] md:block">
          <p className="flex items-center space-x-2">
            <a href="/contact" className="opacity-50">
              Contact us
            </a>
            <SlashIcon className="h-[12px] w-[12px] opacity-50" />
            <span className="font-normal text-[#F97316]"> FAQ</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[12px] p-20 px-4 text-center text-[#525252]">
          <h1 className="text-[34px] font-bold md:text-[48px] lg:text-[60px]">
            Frequently asked questions
          </h1>
          <p className="text-[18px] font-normal md:text-[24px] lg:text-[28px]">
            Questions you might ask about our product
          </p>
        </div>

        <div className="p-5 text-[12px] font-normal text-[#000000] md:hidden">
          <p className="flex items-center space-x-2">
            <a href="/contact" className="opacity-50">
              Contact us
            </a>
            <ChevronRight className="h-[12px] w-[12px] opacity-50" />
            <span className="font-normal text-[#F97316]"> faq</span>
          </p>
        </div>

        <div className="mx-auto my-5 flex h-[44px] w-full items-center gap-[12px] rounded-[32px] border-[1px] border-[#CBD5E1] bg-white px-3 md:w-[470px]">
          <SearchIcon className="h-[16px] w-[16px] text-[#525252]" />
          <input
            className="flex-1 border-none px-1 text-[12px] outline-none md:text-[14px] lg:text-[16px]"
            type="text"
            placeholder="What do you want to know about?"
          />
        </div>
      </section>

      <section className="flex h-auto w-full items-center justify-center gap-[10px] bg-[#FAFAFA] px-4 py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-4 gap-y-5 md:w-[900px] md:grid-cols-2 md:gap-x-7 lg:w-[1200px] lg:grid-cols-3 lg:gap-x-7">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex h-[128px] w-full items-center justify-between bg-[#FFFFFF] p-4 md:p-6 lg:p-10"
            >
              <h2 className="text-[16px] font-medium leading-loose text-[#0F172A] md:text-[18px] lg:text-[20px]">
                {item.text}
              </h2>
              <ChevronDown className="h-4 w-6 md:h-4 md:w-8" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full px-4 py-8 lg:w-[676px]">
        <div className="pb-8 text-center md:pb-12 lg:pb-16">
          <h3 className="text-[24px] font-bold text-[#F97316] md:text-[28px]">
            Still have questions?
          </h3>
          <p className="text-[16px] font-normal text-[#525252] md:text-[18px]">
            Fill the form and enter your message
          </p>
        </div>
        <form
          className="space-y-4 text-[20px] font-normal text-[#434343] md:space-y-3"
          method="post"
          action="/your-action-route"
        >
          <div>
            <label className="block py-2" htmlFor="email">
              Email
            </label>
            <input
              className="h-[48px] w-full rounded-[8px] border-[1px] p-[12px] text-[14px] outline-none hover:border-[#F97316] md:h-[64px] md:p-[16px] md:text-[18px]"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              required
            />
          </div>
          <div>
            <label className="block py-2" htmlFor="name">
              Name
            </label>
            <input
              className="h-[48px] w-full rounded-[8px] border-[1px] p-[12px] text-[14px] outline-none hover:border-[#F97316] md:h-[64px] md:p-[16px] md:text-[18px]"
              type="text"
              id="name"
              name="name"
              placeholder="Enter full name"
              required
            />
          </div>
          <div>
            <label className="block py-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="h-[160px] w-full rounded-[8px] border-[1px] p-[12px] text-[14px] outline-none hover:border-[#F97316] md:h-[204px] md:p-[16px] md:text-[18px]"
              id="message"
              name="message"
              placeholder="Message..."
              required
            ></textarea>
          </div>
        </form>
        <div className="mt-20">
          <button
            className="h-[48px] w-full rounded-md bg-[#F97316] text-[16px] font-normal text-white md:h-[60px] md:text-[18px]"
            type="submit"
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

export default Faq;

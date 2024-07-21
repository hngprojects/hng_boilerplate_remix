import { Link } from "@remix-run/react";

const address = [
  {
    text: "10111, hornchurch, london, United kingdom",
    icon: "/icons/icon (1).svg",
  },
  {
    text: "+4403989898787",
    icon: "/icons/icon (2).svg",
  },

  {
    text: "Email: supportteam@gmail.com",
    icon: "/icons/icon (3).svg",
  },
  {
    text: "Twitter @boilerplate23",
    icon: "/icons/Vector.svg",
  },
  {
    text: "Instagram @boilerplate234",
    icon: "/icons/Vector (2).svg",
  },

  {
    text: "Linkedin @boilerplate34",
    icon: "/icons/Group.svg",
  },
];

export default function contactUsAddress() {
  return (
    <section className="mx-auto flex w-[90%] flex-col gap-4 sm:w-5/6 md:w-2/5 lg:w-[375px]">
      <div className="w-full rounded-sm border bg-primary-foreground p-6 font-[inter] md:px-8 md:py-12 lg:h-[551px] lg:p-8">
        <div className="space-y-8">
          <h3 className="text-[28px] font-bold">United kingdom</h3>
          <h6 className="text-sm font-bold">Business hour : 8am - 6pm</h6>
          <ul className="block space-y-6">
            {address.map((item) => (
              <li
                className="flex items-center gap-2 self-stretch"
                key={item.text}
              >
                <div className="flex aspect-square w-10 items-center justify-center rounded-md bg-neutral-600 p-1">
                  <img src={item.icon} alt={item.text} />
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full rounded-md border bg-primary-foreground p-6 lg:p-8">
        <div className="flex justify-between text-orange-500">
          <h1 className="border-b border-orange-500 text-3xl font-bold">
            FAQs
          </h1>
          <Link to="#FAQ">
            <img
              src="/icons/mdi_arrow-right-bold.svg"
              alt="arrow icon"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <p className="font-normal">
          See and get answers to the most frequent asked questions
        </p>
      </div>
    </section>
  );
}

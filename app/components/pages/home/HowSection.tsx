import { Activity, Command, PieChart } from "lucide-react";

import Container from "./Container";

function HowSection() {
  return (
    <Container Element="section" wrapperClass="md:bg-white">
      <div className="flex flex-col items-center gap-7 pb-7 pt-0 text-center md:flex-row md:gap-8 md:pb-24 md:pt-16 md:text-start">
        <div className="w-full">
          <h3 className="mb-4 text-xl font-bold leading-tight text-neutral-2 md:mb-6 md:text-[2.75rem]">
            <span className="block text-primary md:inline">How It Works: </span>
            Experience the benefits of using our product with every step.
          </h3>
          <p className="text-sm text-neutral-1 md:w-4/5 md:text-xl">
            We designed our product to simplify your life. It offers a
            comprehensive solution. Here&apos;s how it works and how it benefits
            you at each stage.
          </p>
        </div>
        <div className="w-full">
          <ul className="flex flex-col gap-9 px-4 md:px-0">
            <li>
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <span className="flex bg-white p-4 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)]">
                    <Activity size={30} className="text-primary" />
                  </span>
                </div>

                <span>
                  <header className="mb-1 flex items-center justify-center font-bold md:justify-start md:text-[1.75rem]">
                    <span className="mr-2 flex bg-white p-1 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] md:hidden">
                      <Activity className="text-primary" />
                    </span>
                    Pre-Built Sections
                  </header>
                  <p className="text-sm leading-tight text-neutral-1 md:text-lg">
                    Leverage pre-built sections like &quot;Features,&quot;
                    &quot;Benefits,&quot; &quot;Pricing,&quot; and
                    &quot;Testimonials&quot; to showcase your product
                    effectively.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <span className="flex bg-white p-4 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)]">
                    <PieChart size={30} className="text-primary" />
                  </span>
                </div>

                <span>
                  <header className="mb-1 flex items-center justify-center font-bold md:justify-start md:text-[1.75rem]">
                    <span className="mr-2 flex bg-white p-1 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] md:hidden">
                      <PieChart className="text-primary" />
                    </span>
                    Scalable Foundation
                  </header>
                  <p className="text-sm leading-tight text-neutral-1 md:text-lg">
                    Our boilerplate is designed to grow with your product.
                    Easily add new features and functionalities as needed.
                  </p>
                </span>
              </div>
            </li>
            <li>
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <span className="flex bg-white p-4 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)]">
                    <Command size={30} className="text-primary" />
                  </span>
                </div>

                <span>
                  <header className="mb-1 flex items-center justify-center font-bold md:justify-start md:text-[1.75rem]">
                    <span className="mr-2 flex bg-white p-1 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] md:hidden">
                      <Command className="text-primary" />
                    </span>
                    Easy Customization
                  </header>
                  <p className="text-sm leading-tight text-neutral-1 md:text-lg">
                    Tailor the experience to your specific needs and preferences
                    for maximum results.
                  </p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default HowSection;

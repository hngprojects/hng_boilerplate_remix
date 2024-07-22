import { ChevronRight } from "lucide-react";

import QuestionForm from "~/components/faq/form";

function FAQPage() {
  return (
    <div className="font-inter bg-white px-6 pb-16 pt-11 md:px-20 md:pt-9 lg:px-24 xl:px-32">
      <div className="flex flex-col-reverse gap-20 md:flex-col">
        <ul className="flex items-center gap-3 pl-2 text-xs capitalize leading-4 md:pl-0 md:text-base md:leading-5">
          <li className="text-[#7D7D7D]">Contact us</li>
          <span>
            <ChevronRight className="size-3 text-[#6A6A6A] md:size-4" />
          </span>
          <li className="text-primary">FAQ</li>
        </ul>
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-8 !text-neutral-1 text-[#525252] md:text-6xl md:leading-[1.2]">
            Frequently asked questions
          </h2>
          <h6 className="mt-2.5 text-lg font-medium leading-5 !text-neutral-1 text-[#525252] md:mt-3 md:text-[28px] md:leading-8">
            Questions you might ask about our product
          </h6>
        </div>
      </div>
      <div className="mt-12 md:mt-36">
        <h2 className="text-center text-6xl leading-[1.2]">
          Search Component Goes here
        </h2>
      </div>
      <div className="mt-11 bg-white md:mt-7">
        <QuestionForm />
      </div>
    </div>
  );
}

export default FAQPage;

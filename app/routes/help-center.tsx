import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Help Center" },
    { name: "description", content: "How can we help You?" },
  ];
};

export const topics = [
  {
    topic: "What is EcoClean?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "How does EcoClean work?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "What are the key features of EcoClean?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "Who can benefit from using EcoClean?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "What are the system requirements for EcoClean?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "How do I use EcoClean?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "How do I store EcoClean?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "How much does EcoClean cost?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    topic: "Are there any discounts available?",
    ans: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

export const questtions = [
  {
    ques: "What payment methods do you accept?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    ques: "Is there a discount for annual subscriptions?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    ques: "Do you offer a free trial?",
    ans: "Yes, we offer a 14-day free trial for new users. You can explore all the features of our premium plan without any cost during this period.",
  },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");
  const [openTopics, setOpenTopics] = useState<{ [key: number]: boolean }>({});
  const [openQuestions, setOpenQuestions] = useState<{
    [key: number]: boolean;
  }>({});
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownReference = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setShowDropdown(event.target.value.length > 0);
  };

  const handleTopicToggle = (index: number) => {
    setOpenTopics((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  const handleQuestionToggle = (index: number) => {
    setOpenQuestions((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  const handleKeyPressTopicToggle = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleTopicToggle(index);
    }
  };

  const handleKeyPressQuestionToggle = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleQuestionToggle(index);
    }
  };

  const filteredTopics = topics.filter((topic) =>
    topic.topic.toLowerCase().includes(query.toLowerCase()),
  );

  const handleDropdownClick = (topicIndex: number) => {
    setQuery(topics[topicIndex].topic);
    setShowDropdown(false);
    setOpenTopics({ [topicIndex]: true });
  };

  const handleDropdownKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>,
    topicIndex: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleDropdownClick(topicIndex);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownReference.current &&
      !dropdownReference.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-[1440px] bg-background">
      <section className="w-full bg-[#F9731617] p-6 text-center md:px-0 md:py-[100px]">
        <h1 className="text-xl font-medium leading-[24.2px] text-neutral-2 md:text-neutral-1">
          Help Center
        </h1>
        <h2 className="my-5 text-[32px] font-bold leading-[38.73px] text-neutral-2 md:text-6xl md:leading-[72.61px]">
          How can we help You?
        </h2>
        <p className="text-[16px] leading-[21.78px] text-neutral-2 md:text-lg md:text-neutral-1">
          Find advice and answers from our support team
        </p>
        <div className="relative mx-auto mt-5 h-[53px] max-w-[644px] md:h-14">
          <input
            className="h-full w-full rounded-2xl border-[1px] border-border pl-10 outline-none placeholder:text-sm placeholder:text-input md:rounded-[36px] md:bg-[#FAFAFA] md:pl-14 md:placeholder:text-[12px] md:placeholder:text-[#525252]"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search options..."
          />
          <img
            className="absolute left-[20px] top-[54%] w-[11.73px] translate-y-[-50%] md:w-[16px]"
            src="/icons/search.png"
            alt="search-icon"
          />
          {showDropdown && (
            <div
              ref={dropdownReference}
              className="absolute left-0 right-0 top-full z-10 mt-2 max-h-60 overflow-y-auto rounded-md border border-border bg-card shadow-lg"
            >
              {filteredTopics.length > 0 ? (
                filteredTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="cursor-pointer p-2 text-left hover:bg-border"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleDropdownClick(index)}
                    onKeyDown={(event) => handleDropdownKeyPress(event, index)}
                  >
                    {topic.topic}
                  </div>
                ))
              ) : (
                <div className="p-2 text-input">No topics found</div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="p-6 text-center md:py-20">
        <h2 className="text-[24px] font-bold leading-[29.05px] text-primary md:text-[28px] md:leading-[33.89px]">
          Browse by topics
        </h2>
        <div className="my mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-2 md:gap-x-6 md:gap-y-0 lg:grid-cols-3">
          {filteredTopics.length > 0 &&
            filteredTopics.map((topic, index) => (
              <div
                key={index}
                className="mt-6 flex h-[128px] cursor-pointer flex-col justify-center gap-5 bg-card p-6 text-left"
                role="button"
                tabIndex={0}
                onClick={() => handleTopicToggle(index)}
                onKeyDown={(event) => handleKeyPressTopicToggle(event, index)}
              >
                <div className="flex w-full items-center justify-between">
                  <p className="text-loading w-[90%] text-xl font-medium leading-[24.2px]">
                    {topic.topic}
                  </p>
                  <img
                    src="/icons/arrow.png"
                    alt="arrow"
                    className={`transition-transform duration-300 ${openTopics[index] ? "rotate-180" : ""}`}
                  />
                </div>
                {openTopics[index] && <p className="text-sm">{topic.ans}</p>}
              </div>
            ))}
        </div>
      </section>

      <section className="p-6 pb-20">
        <div className="mx-auto grid-cols-2 p-6 text-neutral-2 md:grid md:max-w-[1200px] md:px-0">
          <div>
            <h2 className="text-[24px] font-semibold leading-[29.05px] md:text-[36px] md:leading-[43.57px]">
              Frequently Asked Questions
            </h2>
            <p className="mb-4 mt-2 text-lg md:mb-5 md:text-2xl">
              We couldn’t answer your question?
            </p>
            <Button
              className="border-neutral-2"
              variant="outline"
              size="sm"
              onClick={() => navigate("/contact-us")}
            >
              Contact us
            </Button>
          </div>

          <div className="my-8">
            {questtions.map((ques, ind) => (
              <div
                key={ind}
                className="flex cursor-pointer flex-col justify-center gap-[10px] border-b-[1px] border-border py-[15px] text-left md:mr-6"
                role="button"
                tabIndex={0}
                onClick={() => handleQuestionToggle(ind)}
                onKeyDown={(event) => handleKeyPressQuestionToggle(event, ind)}
              >
                <div className="flex w-full items-center justify-between">
                  <p className="w-[90%] font-medium leading-[24.2px]">
                    {ques.ques}
                  </p>
                  <img
                    src="/icons/arrow.png"
                    alt="arrow"
                    className={`transition-transform duration-300 ${openQuestions[ind] ? "rotate-180" : ""}`}
                  />
                </div>
                {openQuestions[ind] && <p className="text-sm">{ques.ans}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto p-6 text-center md:max-w-[600px]">
          <h2 className="text-2xl font-bold leading-[29.05px] text-primary md:text-[28px] md:leading-[33.89px]">
            Didn’t find an answer?
          </h2>
          <p className="py-5 text-[16px] text-neutral-1 md:text-lg md:leading-[21.78px] md:text-neutral-2">
            Contact us for more inquires and information about our services.
          </p>
          <Button
            className="bg-primary"
            size="lg"
            onClick={() => navigate("/contact-us")}
          >
            Contact us
          </Button>
        </div>
      </section>
    </div>
  );
}

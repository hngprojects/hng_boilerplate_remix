import { zodResolver } from "@hookform/resolvers/zod";
import { ActionFunction } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { schema } from "~/components/faq/schema";
import Footer from "../ui/footer";
import Header from "../ui/header";

type Form = z.infer<typeof schema>;

const dataArray = [
  "What is EcoClean?",
  "How does EcoClean work?",
  "What are the key features of EcoClean?",
  "Who can benefit from using EcoClean?",
  "What are the system requirements for EcoClean?",
  "How do I use EcoClean?",
  "How do I store EcoClean?",
  "How much does EcoClean cost?",
  "Are there any discounts available?",
];
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const searchValue = formData.get("search")?.toString().toLowerCase() || "";

  const matches = dataArray.filter((item) =>
    item.toLowerCase().includes(searchValue),
  );

  return { matches, searchValue };
};

interface ActionData {
  matches: string[];
  searchValue: string;
}

function QuestionForm() {
  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    }),
    [],
  );

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [isSubmitSuccessful, defaultValues, reset]);

  const onSubmit = (data: Form) => {
    console.log("Form submitted with data:", data);
  };

  const actionData = useActionData<ActionData>();
  const [faqOpen, setFaqOpen] = useState(true);

  useEffect(() => {
    if (actionData?.matches?.length > 0) {
      setFaqOpen(false);
    }
  }, [actionData]);
  return (
    <>
      <Header />
      <main>
        <p className="m-5 hidden text-gray-500 md:block">
          Contact us <span className="px-1"> / </span>
          <span className="text-orange-500">FAQ</span>
        </p>
        <div className="flex flex-col flex-wrap justify-center">
          <h1 className="my-24 text-center text-4xl font-bold">
            Frequently asked questions
            <h4 className="text-center text-lg font-normal">
              Questions you might ask about our product
            </h4>
          </h1>
          <p className="m-5 text-gray-500 md:hidden">
            Contact us <span className="px-1"> / </span>{" "}
            <span className="text-orange-500">FAQ</span>
          </p>
          <div>
            <div className="relative block">
              <Form
                className="mb-5 text-center md:relative md:left-[30rem]"
                method="post"
                id="hng_search"
              >
                <div className="pointer-events-none absolute inset-y-2 start-0 ps-3">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search-navbar"
                  className="block w-[55%] rounded-[20rem] border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="What do you want to know about?"
                  autoComplete="off"
                />
              </Form>
              <div className="h-full py-5 md:bg-gray-100">
                <div className="mx-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                  {faqOpen
                    ? dataArray.map((data, index) => (
                        <div className="h-[6rem] overflow-hidden" key={index}>
                          <Link
                            to="#"
                            className="flex h-full flex-col justify-between rounded-lg bg-white p-6 shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 md:border md:border-gray-200"
                          >
                            <h5 className="text-center text-sm font-medium tracking-tight text-gray-900 dark:text-white">
                              {data}
                            </h5>
                          </Link>
                        </div>
                      ))
                    : ""}
                </div>
              </div>

              {actionData && (
                <div className="mx-5 grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                  {actionData.matches.length > 0 ? (
                    actionData.matches.map((match, index) => (
                      <div className="h-[6rem] overflow-hidden" key={index}>
                        <Link
                          to="#"
                          className="flex h-full flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          <h5 className="text-center text-sm font-medium tracking-tight text-gray-900 dark:text-white">
                            {match}
                          </h5>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No match found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <div className="font-inter flex w-full flex-col gap-7 sm:max-w-[min(calc(100%-40px),_676px)] md:mx-auto md:gap-16">
        <div className="flex flex-col gap-4 text-center md:gap-2">
          <h6
            className="text-xl font-bold leading-6 text-primary md:text-[28px] md:leading-[34px]"
            data-testid="header"
          >
            Still have questions ?
          </h6>
          <p
            className="leading-5 text-gray-600 md:text-lg md:leading-snug"
            data-testid="description"
          >
            Fill the form and enter your message
          </p>
        </div>
        <div className="">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-20"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="name"
                  className="capitalize leading-5 text-gray-700 md:text-xl md:leading-6"
                >
                  Name
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="name"
                    {...register("name")}
                    data-testid="name"
                    placeholder="Enter full name"
                    className="rounded-lg border border-gray-400 py-3 pl-4 pr-4 text-sm text-gray-400 max-md:leading-4 md:py-5 md:pr-6 md:text-lg"
                  />
                  {errors?.name && (
                    <small className="text-[13px] leading-6 text-red-500">
                      {errors?.name.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="email"
                  className="capitalize leading-5 text-gray-700 md:text-xl md:leading-6"
                >
                  Email
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter email address"
                    data-testid="email"
                    className="rounded-lg border border-gray-400 py-3 pl-4 pr-4 text-sm text-gray-400 max-md:leading-4 md:py-5 md:pr-6 md:text-lg"
                  />
                  {errors?.email && (
                    <small className="text-[13px] leading-6 text-red-500">
                      {errors?.email.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="phoneNumber"
                  className="capitalize leading-5 text-gray-700 md:text-xl md:leading-6"
                >
                  Number
                </label>
                <div className="flex flex-col gap-1">
                  <input
                    type="phoneNumber"
                    {...register("phoneNumber")}
                    data-testid="phoneNumber"
                    placeholder="Enter phone number"
                    className="rounded-lg border border-gray-400 py-3 pl-4 pr-4 text-sm text-gray-400 max-md:leading-4 md:py-5 md:pr-6 md:text-lg"
                  />
                  {errors?.phoneNumber && (
                    <small className="text-[13px] leading-6 text-red-500">
                      {errors?.phoneNumber.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="message"
                  className="capitalize leading-5 text-gray-700 md:text-xl md:leading-6"
                >
                  Message
                </label>
                <div className="flex flex-col gap-1">
                  <textarea
                    {...register("message")}
                    data-testid="message"
                    placeholder="Message..."
                    className="h-[204px] rounded-lg border border-gray-400 py-3 pl-4 pr-4 text-sm text-gray-400 max-md:leading-4 md:py-5 md:pr-6 md:text-lg"
                  />
                  {errors?.message && (
                    <small className="text-[13px] leading-6 text-red-500">
                      {errors?.message.message}
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                disabled={!isValid}
                data-testid="submit-button"
                className="h-12 w-full rounded-lg bg-primary px-4 py-2 leading-5 text-primary-foreground md:h-[60px] md:rounded-md md:text-lg md:leading-snug"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QuestionForm;

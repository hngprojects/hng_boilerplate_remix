import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { schema } from "~/components/faq/schema";

type Form = z.infer<typeof schema>;

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

  // FROM DOCs: It's recommended to reset in useEffect as execution order matters
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [isSubmitSuccessful, defaultValues, reset]);

  const onSubmit = (data: Form) => {
    console.log("Form submitted with data:", data);
  };

  return (
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
  );
}

export default QuestionForm;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "~/components/faq/schema";
import type { z } from "zod";
import { useEffect, useMemo } from "react";

type Form = z.infer<typeof schema>;

function QuestionForm() {
  const defaultValues = useMemo(
    () => ({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    }),
    []
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
    <div className="flex flex-col gap-7 md:gap-16 max-w-80 md:max-w-[676px] w-full mx-auto font-inter">
      <div className="flex flex-col gap-4 md:gap-2 text-center">
        <h6
          className="textprimary text-primary text-xl leading-6 md:text-[28px] md:leading-[34px] font-bold"
          data-testid="header"
        >
          Still have questions ?
        </h6>
        <p
          className="leading-5 md:text-lg md:leading-snug text-[#525252]"
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
                className="capitalize md:text-xl leading-5 md:leading-6 text-[#434343]"
              >
                Name
              </label>
              <div className="flex flex-col gap-1">
                <input
                  type="name"
                  {...register("name")}
                  data-testid="name"
                  placeholder="Enter full name"
                  className="py-3 md:py-5 pr-4 md:pr-6 pl-4 text-sm max-md:leading-4 md:text-lg text-[#B2B2B2] border border-[#B2B0B0] rounded-lg"
                />
                {errors?.name && (
                  <small className="text-[13px] leading-6 text-[#8A8888]">
                    {errors?.name.message}
                  </small>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="email"
                className="capitalize md:text-xl leading-5 md:leading-6 text-[#434343]"
              >
                Email
              </label>
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Enter email address"
                  data-testid="email"
                  className="py-3 md:py-5 pr-4 md:pr-6 pl-4 text-sm max-md:leading-4 md:text-lg text-[#B2B2B2] border border-[#B2B0B0] rounded-lg"
                />
                {errors?.email && (
                  <small className="text-[13px] leading-6 text-[#8A8888]">
                    {errors?.email.message}
                  </small>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="phoneNumber"
                className="capitalize md:text-xl leading-5 md:leading-6 text-[#434343]"
              >
                Number
              </label>
              <div className="flex flex-col gap-1">
                <input
                  type="phoneNumber"
                  {...register("phoneNumber")}
                  data-testid="phoneNumber"
                  placeholder="Enter phone number"
                  className="py-3 md:py-5 pr-4 md:pr-6 pl-4 text-sm max-md:leading-4 md:text-lg text-[#B2B2B2] border border-[#B2B0B0] rounded-lg"
                />
                {errors?.phoneNumber && (
                  <small className="text-[13px] leading-6 text-[#8A8888]">
                    {errors?.phoneNumber.message}
                  </small>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="message"
                className="capitalize md:text-xl leading-5 md:leading-6 text-[#434343]"
              >
                Message
              </label>
              <div className="flex flex-col gap-1">
                <textarea
                  {...register("message")}
                  data-testid="message"
                  placeholder="Message..."
                  className="py-3 md:py-5 pr-4 md:pr-6 pl-4 text-sm max-md:leading-4 md:text-lg text-[#B2B2B2] border border-[#B2B0B0] rounded-lg h-[204px]"
                />
                {errors?.message && (
                  <small className="text-[13px] leading-6 text-[#8A8888]">
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
              className="rounded-lg md:rounded-md bg-primary text-primary-foreground h-12 md:h-[60px] w-full px-4 py-2 leading-5 md:text-lg md:leading-snug"
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

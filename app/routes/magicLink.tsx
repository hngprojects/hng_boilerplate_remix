import { Form } from "@remix-run/react";
import shield from "/static/image/shield-check.svg";
import { useForm } from "react-hook-form";

import Navbar from "~/components/static-navbar/static-navbar";
import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/footer";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface FormData {
  email: string;
}

const LoginWithMagicLink = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Valid email submitted", data.email);
  };

  return (
    <>
      <Navbar isUserAuthenticated={false} />
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white p-4">
        <div className="text-neutral-dark-2 mb-4 text-center text-4xl font-semibold sm:text-sm md:text-4xl">
          Login With Email Link
        </div>
        <Form
          className="w-full max-w-md px-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 flex flex-col">
            <Label
              className="text-neutral-dark-1 mb-2 text-sm font-normal"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              className={`h-12 w-full rounded-lg border bg-white px-4 py-2 focus:border-primary focus:bg-background focus:outline-none sm:h-16 ${
                errors ? "border-error" : "border-border"
              }`}
              type="email"
              id="email"
              placeholder="Enter Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span id="emailFeedback" className="text-error mt-2 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <Button
            size={"lg"}
            variant={"default"}
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Magic Link
          </Button>
        </Form>
        <div className="mt-4 flex w-full max-w-md items-start justify-start px-4 text-center text-sm text-foreground md:text-xs">
          <div className="relative hidden h-5 w-5 rounded md:block">
            <img src={shield} alt="shield" />
          </div>
          <div className="shrink grow basis-0">
            <span className="text-sm font-normal text-neutral-600">
              By logging in, you agree to the{" "}
            </span>
            <span className="text-sm font-bold text-orange-500 md:text-base">
              <a href="##">Terms of Service</a>
            </span>
            <span className="text-sm font-normal text-neutral-600"> and </span>
            <span className="text-sm font-bold text-orange-500 md:text-base">
              <a href="##">Privacy Policy</a>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default LoginWithMagicLink;

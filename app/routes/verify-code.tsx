import Header from "~/components/ui/header";

import "./../styles/global.css";

import Footer from "~/components/ui/footer";

const VerifyCode = () => {
  return (
    <>
      <Header />
      <div className="mb-[120px] mt-[73px] items-center justify-center bg-background px-6 py-6 md:mb-[133px] md:mt-[85px] md:flex lg:px-8">
        <div className="w-full max-w-lg text-card-foreground">
          <h2 className="mb-4 text-center text-[25px] font-semibold text-accent-foreground md:text-2xl">
            Verification Code
          </h2>
          <p className="text-center text-[13px] text-muted-foreground sm:px-2 md:text-lg">
            Confirm the OTP sent to{" "}
            <span className="font-semibold">ellafedora@gmail.com</span> and
            enter the verification code that was sent. Code expires in{" "}
            <span className="font-bold text-destructive">00:59</span>
          </p>
          <form className="codeInputs my-[20px] flex flex-wrap justify-center gap-[10px] md:my-6 md:gap-4">
            <input
              type="text"
              maxLength={1}
              className="h-[40px] w-[40px] rounded-[var(--radius)] border text-center text-lg font-medium focus:border-destructive focus:outline-destructive md:h-[60px] md:w-[60px]"
            />
            <input
              type="text"
              maxLength={1}
              className="h-[40px] w-[40px] rounded-[var(--radius)] border text-center text-lg font-medium focus:border-destructive focus:outline-destructive md:h-[60px] md:w-[60px]"
            />
            <input
              type="text"
              maxLength={1}
              className="h-[40px] w-[40px] rounded-[var(--radius)] border text-center text-lg font-medium focus:border-destructive focus:outline-destructive md:h-[60px] md:w-[60px]"
            />
            <input
              type="text"
              maxLength={1}
              className="h-[40px] w-[40px] rounded-[var(--radius)] border text-center text-lg font-medium focus:border-destructive focus:outline-destructive md:h-[60px] md:w-[60px]"
            />
            <input
              type="text"
              maxLength={1}
              className="h-[40px] w-[40px] rounded-[var(--radius)] border text-center text-lg font-medium focus:border-destructive focus:outline-destructive md:h-[60px] md:w-[60px]"
            />
            <input
              type="text"
              maxLength={1}
              className="h-[40px] w-[40px] rounded-[var(--radius)] border text-center text-lg font-medium focus:border-destructive focus:outline-destructive md:h-[60px] md:w-[60px]"
            />
          </form>
          <button
            type="submit"
            className="w-full rounded-[var(--radius)] border-border bg-accent py-4 font-medium text-accent-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground focus:border-destructive focus:outline-destructive"
          >
            Verify
          </button>
          <div className="mt-2 text-center text-[13px] text-secondary-foreground md:mt-4">
            Didn’t receive any code?
            <button className="cursor-pointer p-2 font-semibold text-destructive hover:underline focus:border-destructive focus:outline-destructive">
              Resend OTP
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default VerifyCode;

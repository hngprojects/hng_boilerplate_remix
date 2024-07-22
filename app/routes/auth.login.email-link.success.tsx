import { FC } from "react";

import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";
import success from "../../public/images/Vector.png";

const SuccessPage: FC = () => {
  return (
    <div className="max-w-screen flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto mb-[120px] mt-[85px] flex w-[60vw] flex-grow flex-col items-center justify-center md:w-[45vw]">
        <h1 className="mb-6 text-center text-2xl font-medium leading-[47px] text-popover-foreground md:mb-8 md:text-[40px]">
          Sent! Check your email.
        </h1>
        <img
          src={success}
          alt="success"
          className="mb-4 h-[70px] w-[70px] md:mb-8 md:h-[120px] md:w-[120px]"
        />
        <p className="mb-6 w-[320px] text-center text-base font-normal leading-6 text-popover-foreground md:w-fit md:text-xl">
          We have sent an email to talk2johnsnow@gmail.com. It contains
          instructions on how to get started.
        </p>
        <button className="h-10 w-1/2 rounded-[6px] border border-primary bg-white px-4 text-center text-base font-medium leading-5 text-primary md:h-16 md:w-full md:border-destructive md:py-2">
          Open Email
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessPage;

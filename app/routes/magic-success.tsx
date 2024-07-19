import { FC } from "react";
import success from "../../public/images/Vector.png";
import Header from "~/components/ui/header";
import Footer from "~/components/ui/footer";

const MagicSuccessPage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <Header />

      <main className="w-[60vw] md:w-[45vw] mx-auto flex-grow flex flex-col items-center justify-center mt-[85px] mb-[120px]">
        <h1 className="text-2xl md:text-[40px] leading-[47px] text-center text-[#0A0A0A] font-medium mb-6 md:mb-8">
          Sent! Check your email.
        </h1>
        <img
          src={success}
          alt="success"
          className="mb-4 md:mb-8 w-[70px] md:w-[120px] h-[70px] md:h-[120px]"
        />
        <p className="font-normal text-base md:text-xl leading-6 text-[#0A0A0A] text-center mb-6 w-[320px] md:w-fit">
          We have sent an email to talk2johnsnow@gmail.com. It contains
          instructions on how to get started.
        </p>
        <button className="border border-[#CBD5E1] md:border-[#F97316] bg-white text-[#F97316] text-base font-medium leading-5 text-center h-10 md:h-16 md:w-full w-1/2 md:py-2 px-4 rounded-[6px]">
          Open Email
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default MagicSuccessPage;

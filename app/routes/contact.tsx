import ContactForm from "~/components/contactUs/contactForm";
import ContactUsAddress from "~/components/contactUs/contactUsAddress";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

export default function ContactUsPage() {
  return (
    <section className="w-full max-w-full text-[rgb(82,82,82)]">
      <Header />
      <div className="mx-auto my-14 sm:w-[95%] lg:my-20 lg:w-[1200px]">
        <header className="my-10 space-y-2 text-center font-[inter] first-letter:capitalize md:my-20 md:space-y-5 md:capitalize lg:my-20 lg:space-y-4">
          <h1 className="text-3xl font-bold tracking-wide md:text-6xl">
            contact our team
          </h1>
          <h6 className="block text-xl font-normal md:hidden">
            Achieve your dreams with us today
          </h6>
          <h6 className="hidden font-normal md:block md:text-3xl">
            let&apos;s build your product together
          </h6>
        </header>
        <div className="items-center justify-between space-y-4 md:flex md:gap-7 md:space-y-0 lg:gap-40">
          {/* "mx-5 my-12 flex flex-col gap-10 md:mx-32 md:my-24 lg:flex-row lg:gap-40" */}
          <ContactForm />
          <ContactUsAddress />
        </div>
      </div>
      <Footer />
    </section>
  );
}

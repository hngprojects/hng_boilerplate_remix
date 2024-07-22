import { Link } from "@remix-run/react";

import Container from "./Container";

const FindSection = () => {
  return (
    <Container Element="section">
      <div className="relative flex flex-col items-center justify-center py-24 pb-14 text-center md:pb-24">
        <h3 className="mb-2 text-[1.75rem] font-medium text-neutral-2 md:text-[2.75rem] md:font-bold">
          Find The Perfect Fit
        </h3>
        <p className="max-w-[45rem] pb-14 text-base leading-tight text-neutral-1 md:pb-8 md:text-xl">
          Choose the boilerplate plan that best suits your project needs and
          budget. All plans include access to our comprehensive library of
          pre-built sections, drag-and-drop customization.
        </p>
        <Link to="/PaymentInfo" className="bg-primary">
          See Our Pricing Plan
        </Link>
        <div className="absolute -left-[21rem] -top-64 -z-10 hidden h-[39.625rem] w-[39.625rem] rounded-full bg-[#FFD6D6] blur-[500px] md:flex"></div>
      </div>
    </Container>
  );
};

export default FindSection;

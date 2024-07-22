import { useState } from "react";

import DetailsForm from "~/components/DetailsForm";
import PaymentForm from "~/components/PaymentForm";
import PricingPaymentBreadCrumb from "~/components/PricingPaymentBreadCrumb";

const Payment = () => {
  const [showSecondForm, setShowSecondForm] = useState(false);

  return (
    <div>
      <div className="mx-auto w-full">
        <PricingPaymentBreadCrumb />
      </div>
      <div className="max-w-screen mx-auto flex justify-between gap-20 bg-[#ffffff]">
        <div className="mx-auto flex w-10/12 flex-col gap-6 py-[5%] md:flex-row md:justify-between">
          <div className="w-full">
            <h2 className="mb-4">Order Details</h2>
            <div className="w-full rounded bg-[#ffffff] px-6 py-3">
              <h2 className="text-lg font-semibold">Basic Plan</h2>
              <div className="flex justify-between leading-loose md:w-full">
                <span className="leading-loose">Monthly Subscription</span>
                <span className="leading-loose">$800</span>
              </div>
              <hr />
              <div className="mt-1.5 flex justify-between md:w-full">
                <span>Total</span>
                <span>$800</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-4">Payment Method</h2>
            {showSecondForm ? (
              <div className="w-full rounded-md bg-[#ffffff] px-6 py-3 md:w-[588px]">
                <PaymentForm setShowSecondForm={setShowSecondForm} />
              </div>
            ) : (
              <div className="w-full bg-[#ffffff] px-6 py-3 md:w-[588px]">
                <DetailsForm setShowSecondForm={setShowSecondForm} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from "react";

import { Button } from "../../components/ui/button";

export interface SubscriptionProperties {
  title: string;
  name: string;
  image: string;
  email: string;
  renewalDate: string;
  renewalPrice: string;
  renewalPeriod: string;
  reviewSubscriptionLink: string;
  renewSubscriptionLink: string;
}

const Subscription: React.FC<SubscriptionProperties> = ({
  title,
  name,
  image,
  email,
  renewalDate,
  renewalPrice,
  renewalPeriod,
  reviewSubscriptionLink,
  renewSubscriptionLink,
}) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-white text-left font-[Inter] text-5xl text-black">
      <div className="flex flex-col items-center justify-start gap-[56px] self-stretch bg-white p-14 text-base">
        <img className="relative h-[178px] w-[200.2px]" alt="" src={image} />
        <div className="text-neutral-colors-dark-2 flex flex-col items-center justify-center self-stretch text-center text-xl md:text-5xl lg:text-5xl">
          <div className="relative self-stretch font-semibold">{title}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[32px] self-stretch">
          <div className="flex flex-col items-start justify-start self-stretch text-lg">
            <div className="relative self-stretch font-semibold">
              Hi {name},
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[28px] self-stretch text-neutral-500">
            <div className="relative self-stretch">
              We hope you are enjoying your subscription, which will renew soon.
            </div>
            <div className="box-border flex w-full flex-col items-center justify-start gap-[4px] overflow-hidden bg-[#f97316] px-0 py-10 text-center text-white">
              <div className="relative self-stretch leading-[27px]">
                Your Renewal Date
              </div>
              <b className="text-neutral-colors-white relative self-stretch text-xl md:text-5xl lg:text-5xl">
                {renewalDate}
              </b>
            </div>
            <div className="relative self-stretch">
              <span>
                <span className="font-body-medium-small">{`Your subscription for `}</span>
                <span className="font-body-medium-small font-semibold">
                  {renewalPrice}/{renewalPeriod} features
                </span>
                <span>{` will automatically renew on ${renewalDate}. To avoid being charged, you should cancel at least a day before the renewal date. To learn more or cancel, `}</span>
              </span>
              <span className="font-semibold text-[#f97316]">
                review subscription
              </span>
              <span>.</span>
            </div>
            <div className="relative self-stretch">
              To keep your subscription, you can renew your plan for the next
              month.
            </div>
          </div>
          <Button className="box-border flex h-11 flex-row items-center justify-center rounded-lg bg-[#f97316] px-10 py-2 text-center text-white">
            {renewSubscriptionLink}
          </Button>
        </div>
        <div className="flex flex-col items-start justify-center gap-[8px] self-stretch text-sm">
          <div className="relative self-stretch font-medium">Regards,</div>
          <div className="relative self-stretch font-medium">Boilerplate</div>
        </div>
        <div className="relative self-stretch text-neutral-500">
          <span className="font-body-medium-small text-neutral-500">{`If you have questions, please visit our `}</span>
          <span className="font-body-medium-small font-semibold text-[#f97316]">
            FAQs
          </span>
          <span className="font-body-medium-small">
            <span className="text-neutral-500">{`, or email us at `}</span>
            <span className="text-[#f97316]">{email}</span>
            <span>{`. Our team can answer questions about your subscription status. To unsubscribe from future subscription renewal reminders, `}</span>
          </span>
          <span>
            <span className="font-semibold [text-decoration:underline]">
              click here {reviewSubscriptionLink}
            </span>
            <span className="font-body-medium-small">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

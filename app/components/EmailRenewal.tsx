import React from 'react';

interface SubscriptionProps {
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

const Subscription: React.FC<SubscriptionProps> = ({
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
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start text-left text-5xl text-black font-[Inter]">
      <div className="self-stretch bg-white flex flex-col items-center justify-start p-14 gap-[56px] text-base">
        <img
          className="w-[200.2px] relative h-[178px]"
          alt=""
          src={image}
        />
        <div className="self-stretch flex flex-col items-center justify-center text-center text-xl md:text-5xl lg:text-5xl text-neutral-colors-dark-2">
          <div className="self-stretch relative font-semibold">
            {title}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[32px]">
          <div className="self-stretch flex flex-col items-start justify-start text-lg">
            <div className="self-stretch relative font-semibold">
              Hi {name},
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[28px] text-neutral-500">
            <div className="self-stretch relative">
              We hope you are enjoying your subscription, which will renew soon.
            </div>
            <div className="w-full bg-[#f97316] overflow-hidden flex flex-col items-center justify-start py-10 px-0 box-border gap-[4px] text-center text-white">
              <div className="self-stretch relative leading-[27px]">
                Your Renewal Date
              </div>
              <b className="self-stretch relative text-xl md:text-5xl lg:text-5xl text-neutral-colors-white">
                {renewalDate}
              </b>
            </div>
            <div className="self-stretch relative">
              <span>
                <span className="font-body-medium-small">{`Your subscription for `}</span>
                <span className="font-semibold font-body-medium-small">
                  {renewalPrice}/{renewalPeriod} features
                </span>
                <span>{` will automatically renew on 17th September, 2024. To avoid being charged, you should cancel at least a day before the renewal date. To learn more or cancel, `}</span>
              </span>
              <span className="font-semibold text-[#f97316]">
                review subscription
              </span>
              <span>.</span>
            </div>
            <div className="self-stretch relative">
              To keep your subscription, you can renew your plan for the next
              month.
            </div>
          </div>
          <button className="rounded-lg bg-[#f97316] h-11 flex flex-row items-center justify-center py-2 px-10 box-border text-center text-white">
            <div className="relative font-medium">{renewSubscriptionLink}</div>
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[8px] text-sm">
          <div className="self-stretch relative font-medium">Regards,</div>
          <div className="self-stretch relative font-medium">Boilerplate</div>
        </div>
        <div className="self-stretch relative text-neutral-500">
          <span className="font-body-medium-small text-neutral-500">{`If you have questions, please visit our `}</span>
          <span className="font-semibold font-body-medium-small text-[#f97316]">
            FAQs
          </span>
          <span className="font-body-medium-small">
            <span className="text-neutral-500">{`, or email us at `}</span>
            <span className="text-[#f97316]">
              {email}
            </span>
            <span>{`. Our team can answer questions about your subscription status. To unsubscribe from future subscription renewal reminders, `}</span>
          </span>
          <span>
            <span className="[text-decoration:underline] font-semibold">
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

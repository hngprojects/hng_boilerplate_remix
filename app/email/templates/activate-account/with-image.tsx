import { Button } from "@react-email/components";

import TailwindWrapper from "../_components/tailwindWrapper";
import HeroIcon from "../icons/heroIcon";
import Layout from "../Layouts/Layout";

interface propDataType {
  name: string;
  title: string;
  message: string;
  cta_text: string;
  app_name: string;
}

const ViewActLink = (prop: propDataType) => {
  return (
    <>
      <TailwindWrapper>
        <Layout>
          <div className="flex flex-col gap-[40px] p-[56px] lg:gap-[56px]">
            <div>
              <HeroIcon />
            </div>
            <p className="block text-center text-[20px] font-semibold lg:text-[24px]">
              {prop.title}
            </p>

            <section className="flex flex-col gap-[56px]">
              <div>
                <h6 className="mb-[32px] text-[16px] font-semibold lg:text-[18px]">{`Hi ${prop.name},`}</h6>
                <p className="mb-[28px] text-[16px] font-normal">
                  {prop.message}
                </p>
                <div className="flex items-center justify-center">
                  <Button className="estructive-foreground block inline cursor-pointer rounded-[8px] bg-[#F97316] px-10 py-2.5 text-base text-white">
                    {prop.cta_text}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-[8px] font-medium">
                <span>Regards,</span>
                <span>{prop.app_name}</span>
              </div>
            </section>
          </div>
        </Layout>
      </TailwindWrapper>
    </>
  );
};

export default ViewActLink;

ViewActLink.PreviewProps = {
  name: "John Doe",
  title: "New Activation Link Sent",
  message:
    "We have sent you a new activation link for your Boilerplate account. Please click the button below to activate your account:",
  cta_text: "Activate My Account",
  app_name: "Boiler Plate",
} satisfies propDataType;

import { Button } from "@react-email/components";

import TailwindWrapper from "../_components/tailwindWrapper";
import Layout from "../Layouts/Layout";

interface ActLinkProperties {
  name: string;
  title: string;
  message: string;
  cta_text: string;
  app_name: string;
}

const ViewActLink = (property: ActLinkProperties) => {
  return (
    <>
      <TailwindWrapper>
        <Layout>
          <div className="flex flex-col gap-[40px] p-[56px] lg:gap-[56px]">
            <div>
              <div className="flex items-center justify-center md:hidden">
                <img
                  src="https://i.ibb.co/0JSztwD/Frame-13sm.png"
                  alt="message-sent-20-1small"
                />
              </div>
              <div className="hidden items-center justify-center md:flex">
                <img
                  src="https://i.ibb.co/59t3h8T/Frame-13.png"
                  alt="message-sent-20-1big"
                />
              </div>
            </div>
            <p className="block text-center text-[20px] font-semibold lg:text-[24px]">
              {property.title}
            </p>

            <section className="flex flex-col gap-[56px]">
              <div>
                <h6 className="mb-[32px] text-[16px] font-semibold lg:text-[18px]">{`Hi ${property.name},`}</h6>
                <p className="mb-[28px] text-[16px] font-normal">
                  {property.message}
                </p>
                <div className="flex items-center justify-center">
                  <Button className="block cursor-pointer rounded-[8px] bg-[#F97316] bg-destructive-foreground px-10 py-2.5 text-base text-white">
                    {property.cta_text}
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-[8px] font-medium">
                <span>Regards,</span>
                <span>{property.app_name}</span>
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
} satisfies ActLinkProperties;

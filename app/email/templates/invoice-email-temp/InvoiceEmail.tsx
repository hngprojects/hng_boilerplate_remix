import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import DetailTable from "~/components/InvoiceEmail/DetailTable";
import EmailFooter from "~/components/InvoiceEmail/EmailFooter";
import OrderSummaryTable from "~/components/InvoiceEmail/OrderSummaryTable";
import { invoiceDetails, orderSummary, paymentDetails } from "./data";

interface infoProperties {
  phone: string;
  email: string;
}

const InvoiceEmail = ({
  phone = "-456-7890",
  email = "support@llaihng.com",
}: infoProperties) => {
  return (
    <>
      <Html>
        <Head>
          <style>
            {`
             @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

               @media (min-width: 640px) {
                 .container-width {
                   max-width: 420px;
                 }
                   .show{
                   visibility: hidden;
                   }
               }
               @media (min-width: 768px) {
                 .container-width {
                   max-width: 792px;
                 }
                 .show{
                     display:none;
                   }
               }
                  
               @media (min-width: 1024px) {
                 .container-width {
                   max-width: 792px;
                 }
                 
               }

             
                @media (min-width: 768px){
                   .show{
                   display: block;
                   visibility: visible;
                   }
                 }

                   @media (max-width:640px){
                .show{
                    visibility: hidden;
                    display:none;
                   }
               }
                 
                 
             `}
          </style>
        </Head>
        <Tailwind>
          <Body
            className="container-width mx-auto"
            style={{ fontFamily: "inter" }}
          >
            <Container>
              <div className="bg-[#E1D6D666] p-4">
                <Img
                  className="mx-auto"
                  src="/public/images/logo-text.svg"
                  alt="Logo"
                />
              </div>

              <div className="p-10">
                <Section>
                  <Img
                    className="mx-auto"
                    src="/public/images/money-transfer-email.png"
                    alt="money-transfer-invoice"
                  />

                  <Heading className="show py-8 text-center text-2xl font-semibold">
                    Invoice
                  </Heading>

                  <Text className="pt-4 font-semibold text-[#0A0A0A]">
                    Hi John Doe,
                  </Text>

                  <Text className="text-[#111111]">
                    We hope you are doing well. Thank you for your recent
                    purchase from Boilerplate. Please find your invoice attached
                    to this email.
                  </Text>
                </Section>

                <div>
                  <DetailTable
                    title="Invoice Details"
                    text=""
                    details={invoiceDetails}
                  />
                  <OrderSummaryTable
                    title="Order Summary"
                    details={orderSummary}
                  />
                  <DetailTable
                    title="Payment Details"
                    text="Please ensure to pay into this account within two days from today."
                    details={paymentDetails}
                  />

                  <div className="py-6">
                    <Link>
                      <Button className="align-center mx-auto flex w-[142px] justify-center rounded-lg bg-[#F97316] px-[8px] py-[10px] font-bold text-[#FAF8F8]">
                        Pay Now
                      </Button>
                    </Link>
                  </div>
                </div>

                <Section>
                  <Text>Have any questions about your order?</Text>
                  <Text>
                    Give us a call at (+234){phone} or Email us at {email}
                  </Text>

                  <div>
                    <Text>
                      Regards, <br />
                      Boilerplate
                    </Text>
                    {/* <Text>Boilerplate</Text> */}
                  </div>
                </Section>
              </div>

              <EmailFooter />
            </Container>
          </Body>
        </Tailwind>
      </Html>
    </>
  );
};

export default InvoiceEmail;

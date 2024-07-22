import { Body, Section, Html, Container, Tailwind, Text, Img, Heading, Head, Button } from "@react-email/components";


import { invoiceDetails, orderSummary, paymentDetails } from "./data";
import DetailTable from "~/components/InvoiceEmail/DetailTable";
import OrderSummaryTable from "~/components/InvoiceEmail/OrderSummaryTable";
import EmailFooter from "~/components/InvoiceEmail/EmailFooter";


interface infoProps {
    phone: string;
    email: string;
}

const InvoiceEmail = ({phone ="-456-7890", email= "support@llaihng.com"} : infoProps) => {


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
                    <Body className="mx-auto container-width " style={{ fontFamily: "inter" }}>
                        <Container >
                            <div className="bg-[#E1D6D666] p-4">
                                <Img className="mx-auto" src="/public/images/logo-text.svg" alt="Logo" />
                            </div>



                            <div className="p-10 ">


                                <Section>
                                <Img className="mx-auto" src="/public/images/money-transfer-email.png" alt="money-transfer-invoice" />


                                <Heading className="text-2xl font-semibold text-center show py-8" >
                                    Invoice
                                </Heading>

                                <Text className="font-semibold pt-4 text-[#0A0A0A] ">
                                    Hi John Doe,
                                </Text>

                                <Text className="text-[#111111]">
                                    We hope you are doing well. Thank you for your recent purchase from Boilerplate. Please find your invoice attached to this email.
                                </Text>


                                </Section>
                                

                                <div>
                                    <DetailTable title="Invoice Details" text="" details={invoiceDetails} />
                                    <OrderSummaryTable title="Order Summary" details={orderSummary} />
                                    <DetailTable title="Payment Details" text="Please ensure to pay into this account within two days from today." details={paymentDetails} />

                                 <div className="py-6">
                                 <Button className="mx-auto flex justify-center align-center px-[8px] text-[#FAF8F8] font-bold py-[10px] bg-[#F97316] rounded-lg w-[142px]">Pay Now</Button>
                                 </div>
                                </div>


                                <Section>
                                    <Text>Have any questions about your order?</Text>
                                    <Text>Give us a call at (+234){phone} or Email us at {email}</Text>

                                    <div>
                                        <Text>Regards, <br />Boilerplate</Text>
                                        {/* <Text>Boilerplate</Text> */}
                                    </div>
                                </Section>

                            </div>

                            <EmailFooter/>

                        </Container>

                    </Body>
                </Tailwind>
            </Html>
        </>
    )
}

export default InvoiceEmail
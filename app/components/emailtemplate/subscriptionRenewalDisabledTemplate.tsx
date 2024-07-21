import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Link,
  Heading,
  Img,
  Head,
  Hr,
  Preview,
} from "@react-email/components";

interface SubmissionRenewalDissabledProps {
  Title?: string;
  Name: string;
  Image?: string;
  Date?: string;
  Plan?: string;
  ReactivateSubscriptionLink?: string;
  UpgradePlanLink?: string;
  linkedlnLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  tiktokLink?: string;
  reditLink?: string;
  FAQlink?: string;
  boilerplateEmail?: string;
  unsubscribeFromRenewalLink?: string;
  customerSupportLink?: string;
}

const SubscriptionRenewalTemplate = ({
  Title,
  Name,
  Date,
  Plan,
  ReactivateSubscriptionLink,
  UpgradePlanLink,
  linkedlnLink,
  twitterLink,
  instagramLink,
  tiktokLink,
  reditLink,
  FAQlink,
  boilerplateEmail,
  unsubscribeFromRenewalLink,
  customerSupportLink,
}: SubmissionRenewalDissabledProps) => {
  return (
    <Html>
      <Head>
        <style>{`
          @media only screen and (max-width: 640px) {
            .renew_direction {
              font-size: 0.875rem !important;
            }
            .upgrade_button {
              width: 100%;
              padding: 0.5rem 0rem !important; 
              margin: 1.25rem 0rem 0rem 0rem !important;
            }
            .reactive_button {
              width: 100%;
            }
          }
          @media only screen and (max-width: 600px) {
            .responsive-width {
              width: 100% !important;
            }
          }
        `}</style>
      </Head>
      <Tailwind>
        <Body className="mx-auto bg-background text-foreground">
          <Preview>Subscription Renewal for {Name}</Preview>
          <Container className="bg-backgroundColor py-8 mx-auto max-w-full">
            <table
              className="mx-auto py-8 my-8"
              style={{ textAlign: "center", width: "100%" }}
            >
              <tr className="py-8">
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                  <Img
                    src={`/images/Logo.png`}
                    width="40"
                    height="40"
                    alt="Instagram"
                    className="inline-block align-middle"
                  />
                  <Text className="text-card-foreground text-2xl font-semibold leading-normal inline-block align-middle ml-2.5">
                    Boilerplate.
                  </Text>
                </td>
              </tr>
            </table>
          </Container>

          <Container className="w-4/5">
            <Heading className="text-card-foreground text-center   my-12 text-2xl font-semibold leading-normal">
              {Title}{" "}
            </Heading>
            <Text className="text-card-foreground  text-lg font-semibold leading-normal">
              Hi {Name},
            </Text>
            <Text className="text-card-foreground text-base renew_direction font-normal leading-normal">
              As requested, your next subscription renewal for{" "}
              <span className="font-semibold">{Plan}</span> has been disabled.
              You will continue to enjoy benefits of this subscription until{" "}
              {Date}.
            </Text>
            <Text className="text-card-foreground renew_direction text-base font-normal leading-normal">
              We are so sad to see you go. However, if you change your mind, you
              can always reactivate your subscription or upgrade your
              subscription plan.
            </Text>
          </Container>
          <Container className="mx-auto text-center w-4/5">
            <Button className="rounded-[0.5rem] border reactive_button border-destructive text-white bg-destructive py-2 px-10 ">
              <Link
                className=" text-white text-base font-medium leading-6"
                href={ReactivateSubscriptionLink}
                target="_blank"
              >
                Reactivate Subscription
              </Link>
            </Button>
            <Button className="text-custom_orange upgrade_button ml-5 rounded-[0.5rem] border border-custom_orange px-4 py-2 ">
              <Link
                className=" text-[#F97316]    text-base font-medium leading-6"
                href={UpgradePlanLink}
                target="_blank"
              >
                Upgrade Plan
              </Link>
            </Button>
          </Container>
          <Container className=" mt-12 w-4/5">
            <Text className="text-card-foreground text-sm font-medium leading-normal">
              Regards, <br />
              Boilerplate
            </Text>
          </Container>
          <Container className=" mt-8 w-4/5">
            <Text className="text-[#111111E5] text-sm font-normal leading-normal">
              If you have questions, please visit our{" "}
              <Link
                className="text-[#F97316]     text-base font-semibold leading-6"
                href={FAQlink}
                target="_blank"
              >
                FAQs
              </Link>
              , or email us at{" "}
              <Link
                className="text-[#F97316] text-base font-normal leading-6"
                href={`mailto:${boilerplateEmail}`}
                target="_blank"
              >
                help@boilerplate.com
              </Link>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link
                className="text-[#111111E5] text-base font-semibold leading-6"
                href={unsubscribeFromRenewalLink}
                target="_blank"
              >
                click here
              </Link>
              .
            </Text>
          </Container>
          <Container className="bg-backgroundColor mt-8 mx-auto max-w-full">
            <Container className="mx-auto w-4/5 icon_images my-8">
              <Container className="icon_images py-8 responsive-width mx-auto w-1/2">
                <table className="mx-auto text-center icon_images w-4/5">
                  <tr>
                    <td className="mx-auto icon_images">
                      <Link
                        href={twitterLink}
                        className="icon_images text-center mx-auto"
                      >
                        <Img
                          src={`/images/twitter.png`}
                          width="40"
                          height="40"
                          alt="Twitter"
                          className="mx-auto icon_images"
                        />
                      </Link>
                    </td>
                    <td className="mx-auto  pl-8">
                      <Link
                        href={instagramLink}
                        className="icon_images text-center mx-auto"
                      >
                        <Img
                          src={`/images/instagram.png`}
                          width="40"
                          height="40"
                          alt="Instagram"
                          className="mx-auto icon_images"
                        />
                      </Link>
                    </td>
                    <td className="mx-auto pl-8 icon_images">
                      <Link
                        href={tiktokLink}
                        className="icon_images text-center mx-auto"
                      >
                        <Img
                          src={`/images/tiktok.png`}
                          width="40"
                          height="40"
                          alt="TikTok"
                          className="mx-auto icon_images"
                        />
                      </Link>
                    </td>
                    <td className="mx-auto pl-8 icon_images">
                      <Link
                        href={reditLink}
                        className="icon_images text-center mx-auto"
                      >
                        <Img
                          src={`/images/reddit.png`}
                          width="40"
                          height="40"
                          alt="Reddit"
                          className="mx-auto icon_images"
                        />
                      </Link>
                    </td>
                    <td className="mx-auto pl-8">
                      <Link
                        href={linkedlnLink}
                        className="icon_images text-center mx-auto"
                      >
                        <Img
                          src={`/images/linkedln.png`}
                          width="40"
                          height="40"
                          alt="LinkedIn"
                          className="mx-auto icon_images"
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </Container>
              <Text className="text-muted-foreground pt-4 text-sm renew_direction font-normal leading-normal">
                Thank you for choosing Boilerplate.com. Need help?{" "}
                <Link className="text-[#111] " href={customerSupportLink}>
                  {" "}
                  <span className="text-darkText underline font-semibold">
                    Contact our customer support
                  </span>
                </Link>
              </Text>
              <Hr className="border-muted-foreground my-8 text-muted-foreground bg-muted-foreground" />
              <Text className="text-muted-foreground text-sm renew_direction font-normal leading-normal">
                You are receiving this email because you signed up at
                Boilerplate.com. Want to change how you receive these emails?
              </Text>
              <Text className="text-[#111]  text-sm renew_direction font-normal leading-normal">
                You can{" "}
                <span className=" font-semibold">update your preferences</span>{" "}
                or{" "}
                <span className=" text-darkText font-semibold">
                  unsubscribe from this list
                </span>
                .
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default SubscriptionRenewalTemplate;

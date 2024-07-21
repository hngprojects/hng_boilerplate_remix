import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface SubmissionRenewalDissabledProperties {
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
}: SubmissionRenewalDissabledProperties) => {
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
          <Container className="mx-auto max-w-full bg-backgroundColor py-8">
            <table
              className="mx-auto my-8 py-8"
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
                  <Text className="ml-2.5 inline-block align-middle text-2xl font-semibold leading-normal text-card-foreground">
                    Boilerplate.
                  </Text>
                </td>
              </tr>
            </table>
          </Container>

          <Container className="w-4/5">
            <Heading className="my-12 text-center text-2xl font-semibold leading-normal text-card-foreground">
              {Title}{" "}
            </Heading>
            <Text className="text-lg font-semibold leading-normal text-card-foreground">
              Hi {Name},
            </Text>
            <Text className="renew_direction text-base font-normal leading-normal text-card-foreground">
              As requested, your next subscription renewal for{" "}
              <span className="font-semibold">{Plan}</span> has been disabled.
              You will continue to enjoy benefits of this subscription until{" "}
              {Date}.
            </Text>
            <Text className="renew_direction text-base font-normal leading-normal text-card-foreground">
              We are so sad to see you go. However, if you change your mind, you
              can always reactivate your subscription or upgrade your
              subscription plan.
            </Text>
          </Container>
          <Container className="mx-auto w-4/5 text-center">
            <Button className="reactive_button rounded-[0.5rem] border border-destructive bg-destructive px-10 py-2 text-white">
              <Link
                className="text-base font-medium leading-6 text-white"
                href={ReactivateSubscriptionLink}
                target="_blank"
              >
                Reactivate Subscription
              </Link>
            </Button>
            <Button className="text-custom_orange upgrade_button border-custom_orange ml-5 rounded-[0.5rem] border px-4 py-2">
              <Link
                className="text-base font-medium leading-6 text-[#F97316]"
                href={UpgradePlanLink}
                target="_blank"
              >
                Upgrade Plan
              </Link>
            </Button>
          </Container>
          <Container className="mt-12 w-4/5">
            <Text className="text-sm font-medium leading-normal text-card-foreground">
              Regards, <br />
              Boilerplate
            </Text>
          </Container>
          <Container className="mt-8 w-4/5">
            <Text className="text-sm font-normal leading-normal text-[#111111E5]">
              If you have questions, please visit our{" "}
              <Link
                className="text-base font-semibold leading-6 text-[#F97316]"
                href={FAQlink}
                target="_blank"
              >
                FAQs
              </Link>
              , or email us at{" "}
              <Link
                className="text-base font-normal leading-6 text-[#F97316]"
                href={`mailto:${boilerplateEmail}`}
                target="_blank"
              >
                help@boilerplate.com
              </Link>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link
                className="text-base font-semibold leading-6 text-[#111111E5]"
                href={unsubscribeFromRenewalLink}
                target="_blank"
              >
                click here
              </Link>
              .
            </Text>
          </Container>
          <Container className="mx-auto mt-8 max-w-full bg-backgroundColor">
            <Container className="icon_images mx-auto my-8 w-4/5">
              <Container className="icon_images responsive-width mx-auto w-1/2 py-8">
                <table className="icon_images mx-auto w-4/5 text-center">
                  <tr>
                    <td className="icon_images mx-auto">
                      <Link
                        href={twitterLink}
                        className="icon_images mx-auto text-center"
                      >
                        <Img
                          src={`/images/twitter.png`}
                          width="40"
                          height="40"
                          alt="Twitter"
                          className="icon_images mx-auto"
                        />
                      </Link>
                    </td>
                    <td className="mx-auto pl-8">
                      <Link
                        href={instagramLink}
                        className="icon_images mx-auto text-center"
                      >
                        <Img
                          src={`/images/instagram.png`}
                          width="40"
                          height="40"
                          alt="Instagram"
                          className="icon_images mx-auto"
                        />
                      </Link>
                    </td>
                    <td className="icon_images mx-auto pl-8">
                      <Link
                        href={tiktokLink}
                        className="icon_images mx-auto text-center"
                      >
                        <Img
                          src={`/images/tiktok.png`}
                          width="40"
                          height="40"
                          alt="TikTok"
                          className="icon_images mx-auto"
                        />
                      </Link>
                    </td>
                    <td className="icon_images mx-auto pl-8">
                      <Link
                        href={reditLink}
                        className="icon_images mx-auto text-center"
                      >
                        <Img
                          src={`/images/reddit.png`}
                          width="40"
                          height="40"
                          alt="Reddit"
                          className="icon_images mx-auto"
                        />
                      </Link>
                    </td>
                    <td className="mx-auto pl-8">
                      <Link
                        href={linkedlnLink}
                        className="icon_images mx-auto text-center"
                      >
                        <Img
                          src={`/images/linkedln.png`}
                          width="40"
                          height="40"
                          alt="LinkedIn"
                          className="icon_images mx-auto"
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </Container>
              <Text className="renew_direction pt-4 text-sm font-normal leading-normal text-muted-foreground">
                Thank you for choosing Boilerplate.com. Need help?{" "}
                <Link className="text-[#111]" href={customerSupportLink}>
                  {" "}
                  <span className="font-semibold text-darkText underline">
                    Contact our customer support
                  </span>
                </Link>
              </Text>
              <Hr className="my-8 border-muted-foreground bg-muted-foreground text-muted-foreground" />
              <Text className="renew_direction text-sm font-normal leading-normal text-muted-foreground">
                You are receiving this email because you signed up at
                Boilerplate.com. Want to change how you receive these emails?
              </Text>
              <Text className="renew_direction text-sm font-normal leading-normal text-[#111]">
                You can{" "}
                <span className="font-semibold">update your preferences</span>{" "}
                or{" "}
                <span className="font-semibold text-darkText">
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

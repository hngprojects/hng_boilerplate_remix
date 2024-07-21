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
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

// import * as React from "react";

interface ActivationFailureEmailProperties {
  title?: string;
  username?: string;
  logoImage: string;
  Image?: string;
  supportEmail?: string;
  resendLink?: string;
  additionalInfo?: string;
}

export const ActivationFailureEmail = ({
  title = "Activation Link Expired",
  username = "User",
  logoImage = "https://i.postimg.cc/15KxrXtR/boiler-logo.png",
  Image,
  supportEmail,
  resendLink,
  additionalInfo,
}: ActivationFailureEmailProperties) => {
  const previewText = `Activation Failure for ${username}`;

  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>{previewText}</Preview>
        {/*  */}
        <Body
          style={{ fontFamily: '"Inter", sans-serif' }}
          className="mx-auto my-auto bg-white px-2"
        >
          <Container className="mx-auto my-[40px] max-w-[790px]">
            <Section className="m-0 h-[108px] bg-[#E1D6D666]">
              <Img
                src={logoImage}
                alt="Company Logo"
                className="mx-auto my-0"
              />
            </Section>

            <Section className="m-0 px-10 py-14 md:px-14">
              {Image && (
                <Img
                  src={Image}
                  alt="Page Not Found"
                  className="m-0 mx-auto pb-14"
                />
              )}

              <Heading className="m-0 pb-14 text-center text-xl font-semibold text-black sm:text-2xl">
                {title}
              </Heading>

              <Text className="m-0 pb-8 text-base font-semibold text-black sm:text-lg">
                Hi {username},
              </Text>

              <Text className="m-0 text-sm sm:text-base">
                We noticed that your account activation link has expired. For
                your security, activation links are only valid for a specific
                time period.
              </Text>

              <Text className="m-0 py-7 text-sm sm:text-base">
                Don’t worry, you can easily request a new activation link by
                clicking the button below:
              </Text>

              <Section className="flex justify-center pb-14">
                <Button
                  className="m-0 rounded-lg bg-[#F97316] px-10 py-2 text-center text-xs text-white sm:text-base"
                  href={resendLink}
                >
                  Send Another Activation Link
                </Button>
              </Section>
              <Text className="m-0 pb-2 text-sm font-medium">Regards,</Text>
              <Text className="m-0 text-sm font-medium">{additionalInfo}</Text>
            </Section>

            {/* footer */}
            <Section className="bg-[#F3EFEF] px-10 py-8 md:px-12">
              <Section className="m-0 flex justify-center gap-8 pb-[30px]">
                <a href="https://twitter.com" className="pr-4 sm:pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#5B5B5D"
                    viewBox="0 0 256 256"
                  >
                    <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" className="pr-4 sm:pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#5B5B5D"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </a>
                <a href="https://tiktok.com" className="pr-4 sm:pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#5B5B5D"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,80v40a8,8,0,0,1-8,8,103.25,103.25,0,0,1-48-11.71V156a76,76,0,0,1-152,0c0-36.9,26.91-69.52,62.6-75.88A8,8,0,0,1,96,88v42.69a8,8,0,0,1-4.57,7.23A20,20,0,1,0,120,156V24a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8,48.05,48.05,0,0,0,48,48A8,8,0,0,1,232,80Z"></path>
                  </svg>
                </a>
                <a href="https://reddit.com" className="pr-4 sm:pr-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.21"
                    height="16.8"
                    fill="#5B5B5D"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM72,128a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm91.75,55.07a76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0,8,8,0,1,1,7.5,14.14ZM168,144a16,16,0,1,1,16-16A16,16,0,0,1,168,144Z"></path>
                  </svg>
                </a>
                <a href="https://linkedln.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#5B5B5D"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
                  </svg>
                </a>
              </Section>
              <Text className="m-0 text-sm font-normal font-semibold text-[#5B5B5D]">
                Thank you for choosing Boilerplate.com Need help?{" "}
                <Link
                  href={`mailto:${supportEmail}`}
                  className="text-black underline"
                >
                  Contact our customer support.
                </Link>
              </Text>

              <Hr className="my-[30px] border border-dashed border-[#cdcaca]" />

              <Text className="m-0 pb-2 text-sm font-normal leading-5 text-[#5B5B5D]">
                You are receiving this email because you signed up at
                Boilerplate.com. Want to change how you receive these emails?
              </Text>
              <Text className="m-0 text-sm font-normal text-[#5B5B5D]">
                You can{" "}
                <Button className="cursor-pointer font-semibold text-black">
                  {" "}
                  update your preferences
                </Button>{" "}
                or{" "}
                <Button className="cursor-pointer font-semibold text-black">
                  unsubscribe from this list.
                </Button>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ActivationFailureEmail.PreviewProps = {
  title: "Activation Link Expired",
  username: "John Doe",
  logoImage: "https://i.postimg.cc/15KxrXtR/boiler-logo.png",
  Image: "https://i.postimg.cc/kXF7cBRT/404-error.png",
  supportEmail: "support@example.com",
  resendLink: "https://example.com/resend-activation",
  additionalInfo: "Boilerplate",
};

export default ActivationFailureEmail;

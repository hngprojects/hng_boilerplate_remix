/**
 * Author: Bravin Atonya (bravin-atonya)
 *
 * Concept: Deactivation Email template component
 *
 * params: deactivationDetails:{name: string, email: string, dateTime: string}
 *
 * figmaFile Link: https://www.figma.com/design/VEItfX6St5NSAqqNHImcxD/HNG-Boilerplate-Designs?node-id=1995-24485&m=dev
 *
 */

import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { useEffect, useState } from "react";

//This Component is an email template that is used to push mails of deactivation to users of BoilerPlate

/**
 *
 * @param deactivationDetails: {name: string, email: string, dateTime: string}
 * @returns Jsx object
 */
const CheckedDeactivationEmail = ({
  deactivationDetails = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    dateTime: "20th July, 2024 / 11:56pm",
  },
}: {
  deactivationDetails: { name: string; email: string; dateTime: string };
}) => {
  //state to help in ensurering that the checkmark is present to be included in the email template
  const [checkImageExists, setCheckImageExists] = useState(false);
  const checkImageSource = "./Deactivation_Email_assets/deactivation_check.png"; // Image source

  //This method is used to ensure that the checkmark is present in the file location provided before adding it
  useEffect(() => {
    const img = new Image();
    img.src = checkImageSource;

    const handleLoad = () => setCheckImageExists(true);
    const handleError = () => setCheckImageExists(false);

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    // Cleanup the event listeners on component unmount
    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [checkImageSource]);

  return (
    <Html>
      <Head />
      <Preview>Account Successfully Deactivated</Preview>
      <Body>
        <Container style={container}>
          <Section>
            <Row>
              <Column style={email_intro}>
                <Img
                  src="./Deactivation_Email_assets//Logo.png"
                  width="160px"
                  height="29px"
                />
              </Column>
            </Row>
          </Section>
          <Section>
            <Column
              style={email_container_holder}
              className="deactivation_email_container_holder"
            >
              {checkImageExists ? (
                <Column style={check_container}>
                  <Img
                    style={check_image}
                    src={checkImageSource}
                    width="132px"
                    height="132px"
                  />
                </Column>
              ) : (
                <span></span>
              )}
              <Row>
                <Section>
                  <Heading style={email_title}>
                    Account Successfully Deactivated
                  </Heading>
                </Section>
              </Row>
              <Row>
                <Section>
                  <Column style={email_content_container}>
                    <Row>
                      <Heading style={greeting}>
                        Hi {deactivationDetails.name},
                      </Heading>
                    </Row>
                    <Row>
                      <Section>
                        <Column style={email_text_container}>
                          <Row>
                            <Text style={large_body_text}>
                              We wanted to let you know that your Boilerplate
                              account has been successfully deactivated as per
                              your request.
                            </Text>
                          </Row>
                          <Column style={deactivation_details_container}>
                            <Row>
                              <Heading style={deactivation_title}>
                                Your deactivation deatails:
                              </Heading>
                            </Row>
                            <Column style={deactivation_detail}>
                              <div style={listIndicator}></div>
                              <div>
                                <span style={deactivation_title}>
                                  Account Email:
                                </span>
                                {deactivationDetails.email}
                              </div>
                            </Column>
                            <Column style={deactivation_detail}>
                              <div style={listIndicator}></div>
                              <div>
                                <span style={deactivation_title}>
                                  Deactivation Date:
                                </span>
                                {deactivationDetails.dateTime}
                              </div>
                            </Column>
                          </Column>
                          <Row>
                            <Text style={large_body_text}>
                              If you would like to re-activate your account, you
                              can easily do so by contacting our support team
                              via the details below.
                            </Text>
                          </Row>
                          <Row>
                            <Text style={large_body_text}>
                              Give us a call at{" "}
                              <span style={deactivation_title}>
                                (+234)-456-7890
                              </span>{" "}
                              or shoot us an email at{" "}
                              <u>
                                <span style={deactivation_title}>
                                  support@llaihng.com
                                </span>
                              </u>
                            </Text>
                          </Row>
                          <Row>
                            <Text style={large_body_text}>
                              We value your membership and would love to have
                              you back.
                            </Text>
                          </Row>
                        </Column>
                      </Section>
                    </Row>
                  </Column>
                </Section>
              </Row>
              <Row>
                <Section>
                  <Column style={email_end}>
                    <Row>Regards,</Row>
                    <Row>Boilerplate</Row>
                  </Column>
                </Section>
              </Row>
            </Column>
          </Section>
          <Section style={footer}>
            <Column style={footer_content_container}>
              <Column style={socials_container}>
                <Row>
                  <Img
                    src="./Deactivation_Email_assets/Footer_Icons/X.png"
                    width="24px"
                    height="24px"
                  />
                </Row>
                <Row>
                  <Img
                    src="./Deactivation_Email_assets/Footer_Icons/Instagram.png"
                    width="24px"
                    height="24px"
                  />
                </Row>
                <Row>
                  <Img
                    src="./Deactivation_Email_assets/Footer_Icons/tik_tok.png"
                    width="24px"
                    height="24px"
                  />
                </Row>
                <Row>
                  <Img
                    src="./Deactivation_Email_assets/Footer_Icons/redit.png"
                    width="24px"
                    height="24px"
                  />
                </Row>
                <Row>
                  <Img
                    src="./Deactivation_Email_assets/Footer_Icons/linkedIn.png"
                    width="24px"
                    height="24px"
                  />
                </Row>
              </Column>
              <Column style={footer_thank_you}>
                <Row style={small_body_text}>
                  Thank you for choosing Boilerplate.com Need help?{" "}
                  <u>
                    <b>Contact our customer support</b>
                  </u>
                </Row>
                <Row>
                  <hr style={dotted_horizontal_rule} />
                </Row>
                <Column style={reason_container}>
                  <Row style={small_body_text}>
                    You are receiving this email because you signed up at
                    Boilerplate.com. Want to change how you receive these
                    emails?
                  </Row>
                  <Row style={small_body_text}>
                    You can <b>update your preferences</b> or{" "}
                    <b>unsubscribe from this list.</b>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CheckedDeactivationEmail;

//This is the overal container of the email template.
const container = {
  margin: "auto",
  maxWidth: "790px",
};

//This is the section containing the company logo which is centered both vertically and horizontally
const email_intro = {
  height: "108px",
  backgroundColor: "#E1D6D6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

//This is the section containing the Image intro title.
const email_title = {
  textAlign: "center",
  height: "29px",
  fontSize: "clamp(20px, 3.27vw, 24px)",
  fontWeight: "600",
  text: "#0A0A0A",
};

//This section is used to provide padding in the email content
const email_container_holder = {
  padding: "clamp(40px, 7.08%, 56px)",
  display: "flex",
  flexDirection: "column",
  gap: "clamp(40px, 7.08%, 56px)",
};

//This section is used to provide the gap between the greetings and the main email
const email_content_container = {
  display: "flex",
  flexDirection: "column",
  gap: "clamp(28px, 4.36vw, 32px)",
};

//This is the overal container of the email content and that provides the gap between the different elements in it
const email_text_container = {
  display: "flex",
  flexDirection: "column",
  gap: "clamp(24px, 4.36vw, 28px)",
};

//This is the rule that makes sure anything in the design sized 16px has the font size applied to it
const large_body_text = {
  fontSize: "16px",
};

//This is the rule that makes sure anything in the design sized 14px has the font size applied to it
const small_body_text = {
  fontSize: "14px",
};

//This is the rule used to style the greetings element
const greeting = {
  fontSize: "18px",
  fontWeight: "600",
};

//This is the rule that is used to style the deactivation title.
const deactivation_title = {
  fontSize: "16px",
  fontWeight: "600",
};

//This are the rules used to style the section in the email container just before the footer
const email_end = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: "14px",
  fontWeight: "500",
};

//This are the rules used to style the deactivation details content and providing the gap between them
const deactivation_details_container = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

//The list idicator is the circle infront of each deactivation detail.
const listIndicator = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#FDC7A2",
};

//This are the rules that make sure that the deactivation details look seamingly like list items.
const deactivation_detail = {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
};

//The footer of the email template. The rules here ensure that the footer has a background.
const footer = {
  backgroundColor: "#F3EFEF",
};

//These are the rules that make sure that we have a padding around the footer.
const footer_content_container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px 48px",
  gap: "30px",
};

//This is the section that holds the social links that creates a gap around them.
const socials_container = {
  display: "flex",
  flexDirection: "row",
  gap: "33px",
};

//This is the horizontal line that we use the borderTop rule to make it dashed.
const dotted_horizontal_rule = {
  borderTop: "dashed 0.3px #5B5B5D",
};

const footer_thank_you = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
};

const reason_container = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

//This is the container that contains the image and the one that enables us to center it.
const check_container = {
  display: "flex",
  justifyContent: "center",
};

//This rule makes sure that the image is responsive to the change in width reducing by 17.9% of it
const check_image = {
  width: "clamp(100px, 17.98%, 132px)",
  height: "clamp(100px, 17.98%, 132px)",
};

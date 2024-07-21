import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const Email = () => {
  const paymentSummary = [
    {
      title: "Item",
      quantity: "5",
      amount: "$200",
    },
    {
      title: "Item",
      quantity: "3",
      amount: "$120",
    },
    {
      title: "VAT",
      quantity: "10%",
      amount: "$32",
    },
    {
      title: "TOTAL",
      quantity: "100%",
      amount: "$352",
    },
  ];

  return (
    <>
      <Html lang="en" dir="ltr" style={{ fontFamily: "monospace" }}>
        <Head>
          <title>Payment Receipt Email</title>
        </Head>
        <Preview>Payment Receipt</Preview>
        <Body
          style={{
            width: "100%",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          }}
        >
          <Container
            style={{ background: "white", width: "790px", maxWidth: "100%" }}
          >
            {/* =====HEADER===== */}
            <Section
              style={{
                background: "#E1D6D666",
                width: "100%",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Img
                src="https://i.ibb.co/gg7BpG7/logo.png"
                alt="Boilerplate's Logo"
                style={{ width: "160px", height: "29px" }}
              />
            </Section>

            {/* =====CONTENT===== */}

            <Section style={{}}>
              {/* =====OPENING TEXT===== */}
              <Section style={{ height: "213px", padding: "30px 56px" }}>
                <Section
                  style={{
                    height: "153px",
                    background: "#F6F8FB",
                    textAlign: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#434343",
                      fontWeight: "600",
                      fontSize: "20px",
                      lineHeight: "24.2px",
                    }}
                  >
                    We have received your payment of
                  </Text>
                  <Heading
                    as="h4"
                    style={{
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "29.05px",
                    }}
                  >
                    $400.00
                  </Heading>
                </Section>
              </Section>

              <Section
                style={{
                  maxWidth: "100%",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "18px 56px 48px 56px",
                }}
              >
                <Hr style={{ color: "#CBD5E1" }} />
                {/* ======ORDER SUMMARY TABLE====== */}
                <Section style={{}}>
                  <Heading
                    as="h6"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "21.78px",
                      margin: "22px 0",
                    }}
                  >
                    Order Summary
                  </Heading>
                  <Section
                    style={{
                      background: "#F6F8FB",
                      borderRadius: "8px",
                      gap: "16px",
                      padding: "24px",
                    }}
                  >
                    {paymentSummary.map((values, index) => (
                      <>
                        <Row
                          key={index}
                          style={{
                            justifyContent: "space-between",
                            height: "24px",
                          }}
                        >
                          <Column
                            style={{
                              width: "377px",
                              color: "#434343",
                              fontSize: "16px",
                              fontWeight: "400",
                              lineHeight: "19.36px",
                            }}
                          >
                            {values.title}
                          </Column>
                          <Column
                            style={{
                              textAlign: "center",
                              width: "42px",
                              color: "#434343",
                              fontSize: "16px",
                              fontWeight: "500",
                              lineHeight: "24px",
                            }}
                          >
                            {values.quantity}
                          </Column>
                          <Column
                            style={{
                              textAlign: "right",
                              width: "100px",
                              fontSize: "16px",
                              fontWeight: "600",
                              lineHeight: "19.36px",
                            }}
                          >
                            {values.amount}
                          </Column>
                        </Row>
                        <Hr />
                      </>
                    ))}
                  </Section>
                </Section>

                <Hr style={{ marginTop: "32px" }} />

                {/* =====PAYMENT DETAILS TABLE======= */}
                <Section>
                  <Heading
                    as="h6"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "21.78px",
                      margin: "22px 0",
                    }}
                  >
                    Payment Details
                  </Heading>
                  <Section
                    style={{
                      background: "#F6F8FB",
                      borderRadius: "8px",
                      gap: "16px",
                      padding: "24px",
                    }}
                  >
                    <Row
                      style={{
                        justifyContent: "space-between",
                        height: "24px",
                      }}
                    >
                      <Column
                        style={{
                          width: "377px",
                          color: "#434343",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "19.36px",
                        }}
                      >
                        Amount
                      </Column>
                      <Column
                        style={{
                          textAlign: "right",
                          width: "100px",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "19.36px",
                        }}
                      >
                        $352
                      </Column>
                    </Row>
                    <Hr />
                    <Row>
                      <Column
                        style={{
                          width: "377px",
                          color: "#434343",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "19.36px",
                        }}
                      >
                        Payment Method
                      </Column>
                      <Column>
                        <Row>
                          <Column>
                            <Img
                              src="https://i.ibb.co/M7C1FyW/mastercard.png"
                              alt="mastercard"
                            />
                          </Column>
                          <Column>
                            {" "}
                            <span
                              style={{
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "16.94px",
                              }}
                            >
                              Mastercard ending in
                            </span>
                          </Column>
                          <Column>5429</Column>
                        </Row>
                      </Column>
                    </Row>
                    <Hr />
                    <Row>
                      <Column
                        style={{
                          width: "377px",
                          color: "#434343",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "19.36px",
                        }}
                      >
                        Reference ID
                      </Column>
                      <Column
                        style={{
                          textAlign: "right",
                          width: "100px",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "19.36px",
                        }}
                      >
                        R4558990
                      </Column>
                    </Row>
                    <Hr />
                    <Row>
                      <Column
                        style={{
                          width: "377px",
                          color: "#434343",
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "19.36px",
                        }}
                      >
                        Date
                      </Column>
                      <Column
                        style={{
                          textAlign: "right",
                          width: "100px",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "19.36px",
                        }}
                      >
                        July 17,2024
                      </Column>
                    </Row>
                  </Section>
                </Section>

                <Hr style={{ marginTop: "32px" }} />

                {/* ====CONTACT/REGARDS ======*/}
                <Section>
                  <Heading
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    Have any questions about your order?
                  </Heading>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16.94px",
                    }}
                  >
                    Give us a call at{" "}
                    <span style={{ fontWeight: "600" }}>(+234)-456-7890</span>{" "}
                    or Email us at{" "}
                    <span style={{ fontWeight: "600" }}>
                      support@llaihng.com
                    </span>{" "}
                  </Text>
                </Section>
                <Section>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "16.94px",
                    }}
                  >
                    Regards,
                  </Text>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "16.94px",
                    }}
                  >
                    Boilerplate
                  </Text>
                </Section>
              </Section>
            </Section>

            {/* ====FOOTER===== */}
            <Section
              style={{
                background: "#E1D6D666",
                width: "100%",
                height: "266px",
                padding: "32px 48px",
                gap: "10px",
              }}
            >
              <Section>
                {/* ====SOCIAL MEDIA ICONS===== */}
                <Section style={{ width: "252px" }}>
                  <Row style={{ marginRight: "33px" }}>
                    <Column>
                      <Link href="https://twitter.com">
                        <Img
                          src="https://i.ibb.co/gSwSbqn/twitter.png"
                          alt="twitter"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.instagram.com">
                        <Img
                          src="https://i.ibb.co/Q8DY5TR/instagram.png"
                          alt="instagram"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.tiktok.com">
                        <Img
                          src="https://i.ibb.co/XV5dd85/tiktok.png"
                          alt="tiktok"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.reddit.com">
                        <Img
                          src="https://i.ibb.co/yqxxngy/reddit.png"
                          alt="reddit"
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="https://www.linkedin.com">
                        <Img
                          src="https://i.ibb.co/j6q2ZPj/linkedin.png"
                          alt="linkedin"
                        />
                      </Link>
                    </Column>
                  </Row>
                </Section>
                {/* ======CLOSING REMARK==== */}
                <Section>
                  <Section>
                    {" "}
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "16.94px",
                      }}
                    >
                      Thank you for choosing Boilerplate.com Need help?{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "16.94px",
                        }}
                      >
                        Contact our customer support
                      </span>
                    </Text>
                  </Section>
                  <Hr
                    style={{
                      borderTop: "0.3px dashed #CBD5E1",
                      borderTopColor: " #CBD5E1",
                    }}
                  />
                  <Section>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "20px",
                      }}
                    >
                      You are receiving this email because you signed up at
                      Boilerplate.com. Want to change how you receive these
                      emails?
                    </Text>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        lineHeight: "24px",
                      }}
                    >
                      You can{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "24px",
                        }}
                      >
                        update your preferences
                      </span>{" "}
                      or{" "}
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "24px",
                        }}
                      >
                        unsubscribe from this list.
                      </span>
                    </Text>
                  </Section>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </>
  );
};

export default Email;

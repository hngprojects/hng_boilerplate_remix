import { Html, Head, Preview, Body, Container, Section, Img, Heading, Text, Hr, Row, Column } from "@react-email/components";

type Props = {

}

const Email = (props: Props) => {

    return (
        <>
            <Html lang="en" dir="ltr">
                <Head>
                    <title>Payment Receipt Email</title>
                </Head>
                <Preview>Payment Receipt</Preview>
                <Body>
                    <Container>
                        {/* =====HEADER===== */}
                        <Section>
                            <Img
                                src='.../email images/logo.png'
                                // width="75"
                                // height="45"
                                alt="Boilerplate's Logo"
                            />
                        </Section>

                        {/* =====CONTENT===== */}

                        <Section>
                            {/* =====OPENING TEXT===== */}
                            <Section>
                                <Text>We have received your payment of</Text>
                                <Heading>$400.00</Heading>
                            </Section>

                            <Hr />
                            {/* ======ORDER SUMMARY TABLE====== */}
                            <Section>
                                <Heading>Order Summary</Heading>
                                <Section>
                                    <Row>
                                        <Column>A</Column>
                                        <Column>A</Column>
                                        <Column>A</Column>
                                    </Row>
                                    <Hr />
                                    <Row>
                                        <Column>B</Column>
                                        <Column>B</Column>
                                        <Column>B</Column>
                                    </Row>
                                    <Hr />
                                    <Row>
                                        <Column>C</Column>
                                        <Column>C</Column>
                                        <Column>C</Column>
                                    </Row>
                                    <Hr />
                                    <Row>
                                        <Column>C</Column>
                                        <Column>C</Column>
                                        <Column>C</Column>
                                    </Row>
                                </Section>
                            </Section>

                            <Hr />

                            {/* =====PAYMENT DETAILS TABLE======= */}
                            <Section>
                                <Heading as="h4">Payment Details</Heading>
                                <Section>
                                    <Row>
                                        <Column>A</Column>
                                        <Column>A</Column>

                                    </Row>
                                    <Hr />
                                    <Row>
                                        <Column>B</Column>
                                        <Column>B</Column>

                                    </Row>
                                    <Hr />
                                    <Row>
                                        <Column>C</Column>
                                        <Column>C</Column>

                                    </Row>
                                    <Hr />
                                    <Row>
                                        <Column>C</Column>
                                        <Column>C</Column>

                                    </Row>
                                </Section>
                            </Section>

                            <Hr />

                            {/* ====CONTACT/REGARDS ======*/}
                            <Section>
                                <Heading as="h5">Have any questions about your order?</Heading>
                                <Text>Give us a call at (+234)-456-7890 or Email us at support@llaihng.com</Text>
                            </Section>
                            <Section>
                                <Heading as="h5">Regards,</Heading>
                                <Heading as="h5">Boilerplate</Heading>
                            </Section>
                        </Section>

                        {/* ====FOOTER===== */}
                        <Section>
                            <Section>
                                {/* ====SOCIAL MEDIA ICONS===== */}
                                <Row>
                                    <Column>A</Column>
                                    <Column>B</Column>
                                    <Column>C</Column>
                                    <Column>D</Column>
                                </Row>
                                {/* ======CLOSING REMARK==== */}
                                <Section>
                                    <Section> <Text>Thank you for choosing Boilerplate.com Need help? Contact our customer support</Text></Section>
                                    <Hr/>
                                    <Section>
                                        <Text>You are receiving this email because you signed up at Boilerplate.com. Want to change how you receive these emails?</Text>
                                        <Text>You can update your preferences or unsubscribe from this list.</Text>
                                    </Section>
                                </Section>
                            </Section>
                        </Section>
                    </Container>
                </Body>
            </Html>
        </>
    );
}

export default Email
import { Html, Container, Head, Body, Preview, Section, Row, Column, Img, Text, Heading } from "@react-email/components";

const DeactivationEmail = ({ deactivationDetails={name: 'John Doe',email: 'johndoe@gmail.com', dateTime: '20th July, 2024 / 11:56pm'}}: {deactivationDetails: {name: string, email: string, dateTime: string}} ) => {
    return(
        <Html>
            <Head />
            <Preview>Account Successfully Deactivated</Preview>
            <Body>
                <Container style={container}>
                    <Section>
                        <Row>
                            <Column style={email_intro}>
                                <Img
                                    src="./Logo.png"
                                    width="160px"
                                    height="29px"
                                />
                            </Column>
                        </Row>
                    </Section>
                    <Section>
                        <Column style={email_container_holder}>
                            <Row>
                                <Section>
                                    <Heading as='h4' style={email_title} className="deactivation_email_title">
                                        Account Successfully Deactivated
                                    </Heading>
                                </Section>
                            </Row>
                            <Row>
                                <Section >
                                    <Column  style={email_content_container}>
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
                                                            We wanted to let you know that your Boilerplate account has been 
                                                            successfully deactivated as per your request.
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
                                                            <div><span style={deactivation_title}>Account Email:</span> {deactivationDetails.email}</div>
                                                        </Column>
                                                        <Column style={deactivation_detail}>
                                                            <div style={listIndicator}></div>
                                                            <div><span style={deactivation_title}>Deactivation Date:</span> {deactivationDetails.dateTime}</div>
                                                        </Column>
                                                    </Column>
                                                    <Row>
                                                        <Text style={large_body_text}>
                                                            If you would like to re-activate your account, you can easily do so by contacting our support team via the details below.
                                                        </Text>
                                                    </Row>
                                                    <Row>
                                                        <Text style={large_body_text}>
                                                            Give us a call at <span style={deactivation_title}>(+234)-456-7890</span> or shoot us an email at <u><span style={deactivation_title}>support@llaihng.com</span></u>
                                                        </Text>
                                                    </Row>
                                                    <Row>
                                                        <Text style={large_body_text}>
                                                            We value your membership and would love to have you back.
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
                                        <Row>
                                            Regards,
                                        </Row>
                                        <Row>
                                            Boilerplate
                                        </Row>
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
                                        src="./Footer_Icons/X.png"
                                        width="24px"
                                        height="24px"
                                    />
                                </Row>
                                <Row>
                                    <Img
                                        src="./Footer_Icons/Instagram.png"
                                        width="24px"
                                        height="24px"
                                    />
                                </Row>
                                <Row>
                                    <Img
                                        src="./Footer_Icons/tik_tok.png"
                                        width="24px"
                                        height="24px"
                                    />
                                </Row>
                                <Row>
                                    <Img
                                        src="./Footer_Icons/redit.png"
                                        width="24px"
                                        height="24px"
                                    />
                                </Row>
                                <Row>
                                    <Img
                                        src="./Footer_Icons/linkedIn.png"
                                        width="24px"
                                        height="24px"
                                    />
                                </Row>
                            </Column>
                            <Column style={footer_thank_you}>
                                <Row style={small_body_text}>
                                    Thank you for choosing Boilerplate.com Need help? <u><b>Contact our customer support</b></u>                          
                                </Row>
                                <Row>
                                    <hr style={dotted_horizontal_rule} />
                                </Row>
                                <Column style={reason_container}>
                                    <Row style={small_body_text}>
                                        You are receiving this email because you signed up at Boilerplate.com. Want to change how you receive these emails?
                                    </Row>
                                    <Row style={small_body_text}>
                                        You can <b>update your preferences</b> or <b>unsubscribe from this list.</b>
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

export default DeactivationEmail;


const container = {
    margin: 'auto',
    maxWidth: '790px'
}

const email_intro={
    height: '108px',
    backgroundColor: '#E1D6D6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const email_title ={
    textAlign: 'center',
    height: '29px',
    fontSize: 'clamp(20px, 3.27vw, 24px)',
    fontWeight: '600',
    text: '#0A0A0A',
}

const email_container_holder = {
    padding: "clamp(40px, 7.08%, 56px)",
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(40px, 7.08%, 56px)'
}

const email_content_container = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(28px, 4.36vw, 32px)'
}

const email_text_container = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(24px, 4.36vw, 28px)'
}

const large_body_text = {
    fontSize: '16px'
}

const small_body_text = {
    fontSize: '14px'
}

const greeting = {
    fontSize: '18px',
    fontWeight: '600'
}

const deactivation_title = {
    fontSize: '16px',
    fontWeight: '600'
}

const email_end = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500'
}

const deactivation_details_container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
}

const listIndicator ={
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#FDC7A2'
}

const deactivation_detail = {
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    alignItems: 'center'
}

const footer = {
    backgroundColor: '#F3EFEF'
}

const footer_content_container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 48px',
    gap: '30px'
}

const socials_container = {
    display: 'flex',
    flexDirection: 'row',
    gap: '33px'
}

const dotted_horizontal_rule = {
    borderTop: 'dashed 0.3px #5B5B5D'
}

const footer_thank_you = {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
}

const reason_container = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
}

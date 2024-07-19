import styles from "./privacyPage.module.css";
const PrivacyPage = () => {
  return (
    <div className={styles.pagePrivacy}>
      <div className={styles.banner}>
        <h1 className="">Privacy Policy</h1>
        <p className="">Achieve your dreams with us today</p>
      </div>

      <div className={styles.content}>
        <p>home &gt; Legal Terms &gt; Privacy</p>
        <div className={`flex  justify-between mt-10 gap-8 ${styles.flexContainer}`}>
          <div className={styles.row1}>
            <div className={styles.information}>
              <h3 className={styles.header}>Introduction</h3>
              <p className={styles.des}>
                At Boilerplate Hng, we prioritize your privacy and are committed
                to protecting your personal information. This Privacy Policy
                outlines the types of information we collect, how we use it, and
                the measures we take to ensure its security. By using our
                services, you agree to the collection and use of information in
                accordance with this policy.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Information We Collect</h3>
              <p className={styles.des}>
                We collect various types of information in connection with the
                services we provide, including:
              </p>

              <p className={styles.des}>
                <span className={styles.subHeader}>Personal Information: </span>
                This includes any information that can be used to identify you
                personally, such as your name, email address, phone number, and
                payment information. We collect personal information when you
                create an account, make a purchase, or interact with our
                customer support.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>Usage Information: </span>
                This refers to information about how you use our services, such
                as your IP address, browser type, pages visited, and the time
                spent on those pages. We collect this information to understand
                how our users interact with our services and to improve our
                offerings.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Cookies and Tracking Technologies:{" "}
                </span>
                We use cookies and other tracking technologies to enhance your
                experience on our website, analyze site traffic, and for
                security purposes. Cookies are small data files stored on your
                device that help us recognize you and provide a more
                personalized experience.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>How We Use Your Information</h3>
              <p className={styles.des}>
                We use the information we collect to:
              </p>

              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Provide and Improve Our Services:{" "}
                </span>
                Your information helps us deliver the services you request and
                improve our offerings based on your feedback and interactions.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Personalize Your Experience:{" "}
                </span>
                We use your information to tailor our services to your
                preferences and provide you with relevant content and
                recommendations.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>Communicate with You: </span>
                We may use your contact information to send you updates,
                newsletters, and promotional materials. You can opt-out of
                receiving marketing communications at any time.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Ensure Security and Prevent Fraud:{" "}
                </span>
                Your information helps us protect your account and our services
                from unauthorized access and other security threats.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Comply with Legal Obligations:{" "}
                </span>
                We may use your information to comply with legal requirements,
                such as tax regulations and data protection laws.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Sharing Your Information</h3>
              <p className={styles.des}>
                We do not sell your personal information to third parties. We
                may share your information with:
              </p>

              <p className={styles.des}>
                <span className={styles.subHeader}>Service Providers: </span>
                We work with trusted third-party companies that perform services
                on our behalf, such as payment processing, data analysis, and
                customer support. These service providers have access to your
                information only to perform these tasks and are obligated to
                protect your information.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>Legal Authorities: </span>
                We may disclose your information if required by law or if we
                believe that such action is necessary to comply with legal
                processes, protect our rights, or ensure the safety of our users
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>Business Transfers: </span>
                If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
                We will notify you of any such changes and the choices you have
                regarding your information.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Your Choices and Rights</h3>
              <p className={styles.des}>
                You have certain rights regarding your personal information,
                including:
              </p>

              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Access and Correction:{" "}
                </span>
                You can request access to and correction of your personal
                information by contacting us at [Your Contact Information].
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>Deletion: </span>
                You can request the deletion of your personal information,
                subject to certain legal obligations we may have to retain your
                information
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>
                  Opt-Out of Marketing Communications:{" "}
                </span>
                You can opt-out of receiving marketing communications from us by
                following the unsubscribe instructions in the emails or
                contacting us directly.
              </p>
              <p className={styles.des}>
                <span className={styles.subHeader}>Cookies Management: </span>
                You can manage your cookie preferences through your browser
                settings. However, disabling cookies may affect your ability to
                use some features of our services.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Security Measures</h3>
              <p className={styles.des}>
                We implement robust security measures to protect your
                information from unauthorized access, disclosure, alteration,
                and destruction. These measures include encryption, secure
                servers, and regular security assessments. However, no security
                system is completely infallible, and we cannot guarantee the
                absolute security of your information.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Changes to This Privacy Policy</h3>
              <p className={styles.des}>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. When we make
                changes, we will notify you by updating the date at the top of
                this policy and providing a more prominent notice if the changes
                are significant. We encourage you to review this policy
                periodically to stay informed about how we are protecting your
                information.
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Contact Us</h3>
              <p className={styles.des}>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at [Your Contact
                Information].
              </p>
            </div>

            <div className={styles.information}>
              <h3 className={styles.header}>Last Updated</h3>
              <p className={styles.des}>
              This Privacy Policy was last updated on 13/07/2024.
              </p>
            </div>

            <div className={styles.information + " " + styles.des}>
            For more information about our terms and conditions, please visit our <a className={styles.link} href="#">Terms and Conditions page</a>.
            </div>
          </div>

          <div className={`${styles.row2} mt-10 p-4`}>
            <h3 className={`${styles.header}`}>Table of Content</h3>
            <ul className=" ml-6">
              <li className={styles.des}>Introductions</li>
              <li className={styles.des}>Information We Collect</li>
              <li className={styles.des}>How We Use Your Information</li>
              <li className={styles.des}>Sharing Your Information</li>
              <li className={styles.des}>Your choices and Rights</li>
              <li className={styles.des}>Security Measures</li>
              <li className={styles.des}>Security Measures </li>
              <li className={styles.des}>Changes to This Privacy Policy</li>
              <li className={styles.des}>Contact Us </li>
              <li className={styles.des}>Last Updated</li>
            </ul>
          </div>
        </div>
      </div>


      {/* footer goes here */}
    </div>
  );
};

export const loader = async () => {
  return null;
};

export default PrivacyPage;

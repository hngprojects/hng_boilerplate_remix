import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";

import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <header>
          <div className="font flex h-52 min-w-full flex-col items-center justify-center bg-black text-center md:h-80">
            <h1 className="text-3xl font-bold text-white md:text-6xl">
              Terms and Conditions
            </h1>
            <h3 className="mt-2 text-lg font-normal text-card text-gray-300 md:text-3xl">
              Achieve your dreams with us today
            </h3>
          </div>
        </header>

        <main className="mx-auto mt-10 max-w-7xl px-8 py-6 text-gray-500 md:mt-16 md:px-56">
          <div className="rounded-lg bg-white p-6">
            <nav className="">
              <ol className="list-reset flex items-center text-xs text-gray-700">
                <li className="mr-2 flex items-center justify-between">
                  <a
                    href="#"
                    className="w-[52px] text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                  <li className="mr-2">
                    <ChevronRight className="w-4" />
                  </li>
                </li>
                <li className="mr-2 flex items-center justify-between">
                  <a
                    href="#"
                    className="w-[80px] text-gray-500 hover:text-gray-900"
                  >
                    Legal Terms
                  </a>
                  <li className="mr-2">
                    <ChevronRight className="w-4" />
                  </li>
                </li>
                <li className="w-[130px] text-orange-600">
                  Terms and Conditions
                </li>
              </ol>
            </nav>

            <div className="md:mt-22 mt-14 grid grid-cols-12 leading-5 md:gap-20">
              <div className="col-span-12 md:col-span-8">
                <section id="introduction">
                  <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
                  <p className="">
                    Welcome to Boilerplate Hng. These Terms and Conditions
                    govern your use of our website and services. By accessing or
                    using our site, you agree to comply with and be bound by
                    these terms. If you do not agree, please do not use our
                    website..
                  </p>
                </section>

                <section id="user-obligations" className="mt-6">
                  <h2 className="mb-4 text-2xl font-bold">User Obligations</h2>
                  <p className="mb-2">
                    As a user of our services, you are expected to adhere to the
                    following obligations to ensure a safe and enjoyable
                    experience for all users:
                  </p>
                  <ul className="list-outside list-disc space-y-4 pl-5">
                    <li>
                      <strong>Provide Accurate Information:</strong> When
                      creating an account, you must provide accurate and
                      complete information. This includes your name, email
                      address, and any other required details. Providing false
                      information can result in the termination of your account.
                    </li>
                    <li>
                      <strong>Maintain Account Security:</strong> You are
                      responsible for maintaining the confidentiality of your
                      account credentials. Do not share your password with
                      anyone and notify us immediately if you suspect any
                      unauthorized use of your account. We are not liable for
                      any loss or damage arising from your failure to comply
                      with this security obligation.
                    </li>
                    <li>
                      <strong>Comply with Applicable Laws:</strong> Your use of
                      our services must comply with all applicable laws and
                      regulations. This includes local, state, national, and
                      international laws. Any illegal activity will result in
                      the immediate termination of your account and may be
                      reported to the relevant authorities.
                    </li>
                    <li>
                      <strong>Respect Intellectual Property Rights:</strong> You
                      must respect the intellectual property rights of others.
                      Do not upload, share, or distribute content that you do
                      not have the right to use. You are responsible for the
                      content you upload and its legality. Any violation may
                      result in the immediate termination of your account and
                      legal action.
                    </li>
                    <li>
                      <strong>Prohibited Conduct:</strong> You must not engage
                      in any conduct that is harmful, offensive, or disruptive.
                      This includes, but is not limited to, harassment,
                      spamming, phishing, or distributing malware. Any behavior
                      that we deem inappropriate will result in the termination
                      of your account.
                    </li>
                    <li>
                      <strong>Use Services as Intended:</strong> You must use
                      our services only for their intended purposes. Do not
                      attempt to exploit or misuse our services in any way. This
                      includes circumventing any security measures, using
                      automated tools to access our services, or interfering
                      with the
                    </li>
                  </ul>
                </section>
                <section id="acceptable-use-policy" className="mt-6">
                  <h2 className="mb-4 text-2xl font-bold">
                    Acceptable Use Policy
                  </h2>
                  <p className="mb-2">
                    To maintain a positive and productive environment, we have
                    established the following acceptable use policy:
                  </p>
                  <ul className="list-outside list-disc space-y-4 pl-5">
                    <li>
                      <strong>Respectful Communication:</strong> All
                      interactions on our platform must be respectful and
                      professional. Do not use offensive, abusive, or
                      inflammatory language. Treat all users with respect and
                      courtesy.
                    </li>
                    <li>
                      <strong>No Misrepresentation:</strong> Do not impersonate
                      any person or entity, or falsely state or otherwise
                      misrepresent your affiliation with a person or entity.
                      Authenticity is crucial to maintaining trust on our
                      platform.
                    </li>
                    <li>
                      <strong>Privacy Protection:</strong> Do not collect or
                      store personal data about other users without their
                      express permission. Respect the privacy of others and
                      adhere to all applicable privacy laws and regulations.
                    </li>
                    <li>
                      <strong>Appropriate Content:</strong> All content shared
                      on our platform must be appropriate and lawful. Do not
                      share content that is obscene, defamatory, threatening, or
                      otherwise objectionable. This includes text, images,
                      videos, and any other form of media.
                    </li>
                    <li>
                      <strong>Compliance with Policies:</strong> You must comply
                      with all our policies, including our Privacy Policy and
                      any additional guidelines we may provide. Familiarize
                      yourself with our policies to ensure you are using our
                      services appropriately.
                    </li>
                  </ul>
                </section>
                <section id="intellectual-property-rights" className="mt-6">
                  <h2 className="mb-4 text-2xl font-bold">
                    Intellectual Property Rights
                  </h2>
                  <p className="mb-2">
                    We value and respect intellectual property rights and expect
                    our users to do the same. The following guidelines outline
                    our stance on intellectual property:
                  </p>
                  <ul className="list-outside list-disc space-y-4 pl-5">
                    <li>
                      <strong>Ownership of Content:</strong> All content on our
                      website, including text, graphics, logos, and images, is
                      the property of boilerplate Hng or its content suppliers
                      and is protected by intellectual property laws. You may
                      not use, reproduce, or distribute any content without our
                      express written permission.
                    </li>
                    <li>
                      <strong>User-Generated Content:</strong> By submitting
                      content to our platform, you grant us a non-exclusive,
                      royalty-free, perpetual, and worldwide license to use,
                      reproduce, modify, publish, and distribute your content.
                      You retain all rights to your content, but you grant us
                      the right to use it in connection with our services.
                    </li>
                    <li>
                      <strong>Infringement Claims:</strong> If you believe that
                      your intellectual property rights have been infringed,
                      please contact us with detailed information about the
                      alleged infringement. We will investigate the matter and
                      take appropriate action, which may include removing the
                      infringing content and terminating the accounts of repeat
                      infringers.
                    </li>
                    <li>
                      <strong>Trademarks:</strong> Our trademarks and trade
                      dress may not be used in connection with any product or
                      service without our prior written consent. Any
                      unauthorized use of our trademarks is strictly prohibited.
                    </li>
                  </ul>
                </section>
                <section
                  id="disclaimer-and-limitation-of-liability"
                  className="mt-6"
                >
                  <h2 className="mb-4 text-2xl font-bold">
                    Disclaimer and Limitation of Liability
                  </h2>
                  <p className="mb-2">
                    To ensure clarity regarding our responsibilities and your
                    expectations, the following disclaimers and limitations of
                    liability apply:
                  </p>
                  <ul className="list-outside list-disc space-y-4 pl-5">
                    <li>
                      <strong>No Warranties:</strong> Our website and services
                      are provided &ldquo;as is&rdquo; without any warranties,
                      express or implied. We do not guarantee the accuracy,
                      completeness, or reliability of the content on our site.
                      Your use of our services is at your own risk.
                    </li>
                    <li>
                      <strong>Limitation of Liability:</strong> To the fullest
                      extent permitted by law, [Your Company Name] disclaims all
                      liability for any damages arising from your use of our
                      website and services. This includes direct, indirect,
                      incidental, consequential, and punitive damages.
                    </li>
                    <li>
                      <strong>Third-Party Content:</strong> Our website may
                      contain links to third-party websites and content. We do
                      not endorse or assume any responsibility for any
                      third-party content. Your interactions with third-party
                      websites are solely between you and the third party.
                    </li>
                    <li>
                      <strong>Indemnification:</strong> You agree to indemnify
                      and hold harmless [Your Company Name] and its affiliates,
                      officers, agents, and employees from any claims,
                      liabilities, damages, losses, and expenses arising from
                      your use of our services or your violation of these Terms
                      and Conditions.
                    </li>
                  </ul>
                </section>
                <section
                  id="governing-law-and-dispute-resolution"
                  className="mt-6"
                >
                  <h2 className="mb-4 text-2xl font-bold">
                    Governing Law and Dispute Resolution
                  </h2>
                  <p className="mb-2">
                    To address any disputes that may arise, the following
                    provisions apply:
                  </p>
                  <ul className="list-outside list-disc space-y-4 pl-5">
                    <li>
                      <strong>Governing Law:</strong> These Terms and Conditions
                      are governed by the laws of [Your Country/State], without
                      regard to its conflict of laws principles. Any legal
                      action or proceeding arising under these terms will be
                      brought exclusively in the courts of [Your Jurisdiction].
                    </li>
                    <li>
                      <strong>Dispute Resolution:</strong> We are committed to
                      resolving disputes amicably and efficiently. In the event
                      of a dispute, you agree to first attempt to resolve the
                      matter informally by contacting us. If the dispute cannot
                      be resolved informally, we agree to submit the matter to
                      mediation before pursuing any other form of dispute
                      resolution.
                    </li>
                    <li>
                      <strong>Arbitration:</strong> If mediation fails, any
                      dispute arising from these Terms and Conditions will be
                      resolved by binding arbitration in accordance with the
                      rules of [Arbitration Organization]. The arbitration will
                      be conducted in [Location], and the arbitrator&rsquo;s
                      decision will be final and binding.
                    </li>
                  </ul>
                </section>
                <section id="changes-to-terms" className="mt-6">
                  <h2 className="mb-4 text-2xl font-bold">Changes to Terms</h2>
                  <p className="mb-2">
                    We reserve the right to modify these Terms and Conditions at
                    any time. Changes will be effective immediately upon posting
                    on our website. Your continued use of the site constitutes
                    your acceptance of the revised terms. We encourage you to
                    review these terms periodically to stay informed of any
                    updates.
                  </p>
                </section>
                <section id="contact-information" className="mt-6">
                  <h2 className="mb-4 text-2xl font-bold">
                    Contact Information
                  </h2>
                  <p className="mb-2">
                    For any questions or concerns regarding these Terms and
                    Conditions, please contact us at [Your Contact Information].
                    We value your feedback and are here to assist you with any
                    inquiries.
                  </p>
                </section>
                <section id="last-updated-date" className="mt-6">
                  <h2 className="mb-4 text-2xl font-bold">Last Updated</h2>
                  <p className="mb-2">
                    These Terms and Conditions were last updated on [Date].
                    Please review them periodically for any changes..
                  </p>
                </section>
                <section className="mt-6">
                  <p className="mb-2">
                    For more information about our privacy practices, please
                    visit our{" "}
                    <a href="/privacy" className="text-orange-500 underline">
                      Privacy Policy page.
                    </a>
                  </p>
                </section>
              </div>

              <aside className="order-first col-span-12 mb-20 mt-10 md:order-none md:col-span-4 md:mb-0 md:mt-0">
                <div className="">
                  <h3 className="mb-4 text-left text-2xl font-bold">
                    Table of Content
                  </h3>
                  <div>
                    <ul className="list-outside list-disc space-y-2 pl-5">
                      <li>
                        <Link
                          to="#introduction"
                          className="hover:text-gray-900"
                        >
                          Introduction
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#user-obligations"
                          className="hover:text-gray-900"
                        >
                          User Obligations
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#acceptable-use-policy"
                          className="hover:text-gray-900"
                        >
                          Acceptable Use Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#intellectual-property-rights"
                          className="hover:text-gray-900"
                        >
                          Intellectual Property Right
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#disclaimer-and-limitation-of-liability"
                          className="hover:text-gray-900"
                        >
                          Disclaimer and Limitation of Liability
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#governing-law-and-dispute-resolution"
                          className="hover:text-gray-900"
                        >
                          Governing Law and Dispute Resolution
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#changes-to-terms"
                          className="hover:text-gray-900"
                        >
                          Changes to Terms
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#contact-information"
                          className="hover:text-gray-900"
                        >
                          Contact Information
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#last-updated-date"
                          className="hover:text-gray-900"
                        >
                          Last Updated Date
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

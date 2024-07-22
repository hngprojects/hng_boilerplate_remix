import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";

const About = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl">
        <Header />
        <div className="mx-auto grid w-[365px] grid-cols-2 gap-10 rounded-2xl bg-[#F973161A] px-2 py-4 md:w-full md:grid-cols-4 lg:gap-[120px]">
          <div className="flex flex-col gap-4 text-center text-primary md:block">
            <div className="text-3xl font-bold lg:text-5xl">10 years</div>
            <div className="text-sm leading-4 lg:text-lg">In Business</div>
          </div>
          <div className="flex flex-col gap-4 text-center text-primary md:block">
            <div className="text-3xl font-bold lg:text-5xl">75,000+</div>
            <div className="text-sm leading-4 lg:text-lg">Customers</div>
          </div>
          <div className="flex flex-col gap-4 text-center text-primary md:block">
            <div className="text-3xl font-bold lg:text-5xl">100k+</div>
            <div className="text-sm leading-4 lg:text-lg">
              Monthly Blog Readers
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center text-primary md:block">
            <div className="text-3xl font-bold lg:text-5xl">1.2m+</div>
            <div className="text-sm leading-4 lg:text-lg">Social Followers</div>
          </div>
        </div>

        {/* our services */}
        <div className="my-16 flex flex-col items-center gap-8 px-0 md:flex-row md:px-5 lg:gap-28 lg:px-0">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-start">
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold capitalize leading-7 text-primary md:text-[28px] md:leading-8">
                our services
              </p>
              <h3 className="relative w-[380px] text-3xl font-semibold capitalize leading-9 text-[#525252] md:text-[44px] md:leading-[53px] lg:w-[460px]">
                Trained to give you the best
                <img
                  src="images/Ellipse.png"
                  alt=""
                  className="absolute bottom-0 left-44 w-14 md:w-28 lg:left-24"
                />
              </h3>
            </div>
            <button className="w-fit rounded-lg bg-primary px-4 py-2 text-sm font-medium leading-6 text-white">
              Contact us
            </button>
          </div>
          <div>
            <p className="w-[322px] text-center text-[16px] font-normal leading-5 text-[#525252] lg:w-[500px] lg:text-start lg:text-lg">
              Since our founding in, Hng Boilerplate has been dedicated to
              constantly evolving to stay ahead of the curve. Our agile mindset
              and relentless pursuit of innovation ensure that youre always
              equipped with the most effective tools and strategies.
            </p>
          </div>
        </div>
        {/* our mission */}
        <div className="flex flex-col-reverse items-center justify-between gap-14 md:flex-row lg:gap-0">
          <div className="w-full md:w-[55%]">
            <img src="images/image.png" alt="mission img" />
          </div>
          <div className="flex w-[382px] flex-col gap-4 px-4 text-center md:w-[50%] md:text-start lg:w-2/5 lg:gap-y-6 lg:px-0">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-2xl font-bold leading-7 text-primary lg:text-[28px] lg:leading-8">
                Our mission
              </h3>
              <p className="text-3xl font-semibold leading-9 text-[#525252] lg:text-[44px] lg:leading-[55px]">
                We are committed to giving you the best
              </p>
            </div>
            <p className="text-lg leading-5 text-[#525252]">
              At Hng Boilerplate, we are dedicated to exceeding your
              expectations. We strive to understand your unique needs and
              challenges, providing tailored solutions that drive real results
              and empower your success.
            </p>
          </div>
        </div>

        {/* our vision */}
        <div className="my-16 flex flex-col items-center justify-between gap-14 md:flex-row lg:gap-0">
          <div className="flex w-[382px] flex-col gap-4 px-4 text-center md:w-[50%] md:text-start lg:w-2/5 lg:gap-y-6 lg:px-0">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-2xl font-bold leading-7 text-primary lg:text-[28px] lg:leading-[33px]">
                Our Vision
              </h3>
              <p className="text-3xl font-semibold leading-9 text-[#525252] lg:text-[44px] lg:leading-[53px]">
                Leading the Way, Redefining Industries
              </p>
            </div>
            <p className="text-[16px] font-normal leading-5 lg:text-lg">
              At Hng Boilerplate, Our vision is to revolutionize the industry
              landscape by continuously pushing the boundaries of innovation,
              setting new standards, and inspiring others to follow.
            </p>
          </div>
          <div className="w-full md:w-[55%]">
            <img src="images/image2.png" alt="vision img" />
          </div>
        </div>
        {/* our core value */}
        <div className="flex flex-col gap-8 px-5 lg:px-0">
          <div className="flex justify-center">
            <div className="flex w-[382px] flex-col gap-y-3 text-center text-[#525252] lg:w-[500px]">
              <h3 className="text-3xl font-semibold leading-9 lg:text-[44px] lg:leading-[53px]">
                Our Core Values
              </h3>
              <p className="text-[16px] font-normal leading-5 lg:text-lg">
                Our values shape the core of our organization and define the
                character of our industry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-y-6 rounded-[10px] bg-[#F973161A] p-4">
              <h3 className="text-center text-[28px] font-bold leading-8 text-primary">
                Integrity
              </h3>
              <p className="text-center text-lg font-normal leading-5 text-[#525252] lg:text-start">
                We uphold the highest ethical standards in everything we do,
                fostering trust and transparency with our clients, partners, and
                employees. We believe that honesty and integrity are the
                foundation of lasting success.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 rounded-[10px] bg-[#F973161A] p-4">
              <h3 className="text-center text-[28px] font-bold leading-8 text-primary">
                Customer-Centricity
              </h3>
              <p className="text-center text-lg font-normal leading-5 text-[#525252] lg:text-start">
                Our customers are at the heart of our business. We strive to
                understand their needs, exceed their expectations, and build
                lasting relationships based on trust and mutual respect. We
                believe that putting our customers first is the key to long-term
                success.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 rounded-[10px] bg-[#F973161A] p-4">
              <h3 className="text-center text-[28px] font-bold leading-8 text-primary">
                Innovation
              </h3>
              <p className="text-center text-lg font-normal leading-5 text-[#525252] lg:text-start">
                We embrace a culture of continuous improvement and creativity,
                constantly seeking new ways to evolve and enhance our products,
                services, and processes. We encourage experimentation and
                risk-taking, recognizing that innovation is essential for
                growth.
              </p>
            </div>
            <div className="flex flex-col gap-6 rounded-[10px] bg-[#F973161A] p-4">
              <h3 className="text-center text-[28px] font-bold leading-8 text-primary">
                Excellence
              </h3>
              <p className="text-center text-lg font-normal leading-5 text-[#525252] lg:text-start">
                We are committed to delivering exceptional quality in everything
                we do, from our products and services to our customer
                interactions and internal processes. We strive for continuous
                improvement and hold ourselves to the highest standards of
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* executive team */}
        <section className="my-16 flex h-fit w-full items-end justify-center bg-[url('/images/Bgmobile.png')] bg-cover bg-no-repeat lg:h-[610px] lg:bg-[url('/images/background.png')] lg:pb-3">
          <div className="mt-24 md:mt-36">
            <div className="px-4 text-center lg:w-full">
              <h2 className="text-3xl font-semibold leading-9 text-[#525252] lg:text-[44px] lg:leading-[53px]">
                The Executive Team
              </h2>
              <p className="text-[16px] leading-5 lg:text-lg">
                Meet Our Exclusive team that have been trained to meet your
                needs.
              </p>
            </div>
            {/* cards */}
            <div className="mx-auto mt-8 grid w-72 grid-cols-1 gap-7 md:w-full md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              <div className="flex h-fit flex-col gap-4 bg-card pb-[14px] lg:w-72">
                <div className="bg-[#D3D3D3]">
                  <img src="images/team-image1.png" alt="" />
                </div>
                <div className="flex h-[152px] flex-col justify-between gap-y-5 ps-[14px]">
                  <div className="text-[#525252]">
                    <h2 className="text-lg font-semibold leading-5">
                      John Abraham
                    </h2>
                    <p className="mt-1 text-xs font-normal leading-4">
                      Business Developer
                    </p>
                    <p className="mt-2 text-sm font-normal leading-5">
                      John is a strategic product manager with a keen eye for
                      market trends.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <img
                      src="icons/facebook.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/instagram.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/twitter.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-fit flex-col gap-4 bg-card pb-[14px] lg:w-72">
                <div className="bg-[#D3D3D3]">
                  <img src="images/team-image2.png" alt="" />
                </div>
                <div className="flex h-[152px] flex-col justify-between gap-y-5 ps-[14px]">
                  <div className="text-[#525252]">
                    <h2 className="text-lg font-semibold leading-5">
                      Addison mark
                    </h2>
                    <p className="mt-1 text-xs font-normal leading-4">
                      Software Engineer
                    </p>
                    <p className="mt-2 text-sm font-normal leading-5">
                      Addison our skilled frontend developer, brings websites to
                      life with clean code.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <img
                      src="icons/facebook.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/instagram.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/twitter.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-fit flex-col gap-4 bg-card pb-[14px] lg:w-72">
                <div className="bg-[#D3D3D3]">
                  <img src="images/team-image3.png" alt="" />
                </div>
                <div className="flex h-[152px] flex-col justify-between gap-y-5 ps-[14px]">
                  <div className="text-[#525252]">
                    <h2 className="text-lg font-semibold leading-5">
                      Joy Tony
                    </h2>
                    <p className="mt-1 text-xs font-normal leading-4">
                      Product Manager
                    </p>
                    <p className="mt-2 text-sm font-normal leading-5">
                      Joy is a passionate product manager driven by user
                      experience.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <img
                      src="icons/facebook.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/instagram.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/twitter.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-fit flex-col gap-4 bg-card pb-[14px] lg:w-72">
                <div className="bg-[#D3D3D3]">
                  <img src="images/team-image4.png" alt="" />
                </div>
                <div className="flex h-[152px] flex-col justify-between gap-y-5 ps-[14px]">
                  <div className="text-[#525252]">
                    <h2 className="text-lg font-semibold leading-5">
                      Johua Philip
                    </h2>
                    <p className="mt-1 text-xs font-normal leading-4">
                      Data Analyst
                    </p>
                    <p className="mt-2 text-sm font-normal leading-5">
                      Joshua, our data analyst, uses user data to optimize our
                      boilerplates for performance.
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <img
                      src="icons/facebook.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/instagram.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                    <img
                      src="icons/twitter.svg"
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* join our team */}
        <section>
          <div className="flex flex-col items-center gap-4 text-center text-[#525252] lg:gap-6">
            <h2 className="text-3xl font-semibold leading-9 lg:text-[44px] lg:leading-[53px]">
              Join Our Team{" "}
            </h2>
            <p className="mx-auto px-4 text-[16px] font-normal leading-5 lg:w-[729px] lg:text-lg">
              Interested in joining out team? View our Job Listing page for
              openings and apply with an equal chance of working with us!
            </p>
            <button className="w-fit rounded-[6px] bg-primary px-4 py-2 text-sm font-medium text-white">
              Join us
            </button>
          </div>
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;

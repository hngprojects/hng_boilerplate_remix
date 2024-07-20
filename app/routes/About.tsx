

function About() {
    return (
      <>
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-[120px] gap-10 bg-[#F973161A] rounded-2xl py-4 px-2 w-[365px] mx-auto md:w-full">
            <div className="text-center text-[#F97316] flex flex-col gap-4 md:block">
              <div className="lg:text-5xl text-3xl font-bold">10 years</div>
              <div className="lg:text-lg text-sm leading-4">In Business</div>
            </div>
            <div className="text-center text-[#F97316] flex flex-col gap-4 md:block">
              <div className="lg:text-5xl text-3xl font-bold">75,000+</div>
              <div className="lg:text-lg text-sm leading-4">Customers</div>
            </div>
            <div className="text-center text-[#F97316] flex flex-col gap-4 md:block">
              <div className="lg:text-5xl text-3xl font-bold">100k+</div>
              <div className="lg:text-lg text-sm leading-4">
                Monthly Blog Readers
              </div>
            </div>
            <div className="text-center text-[#F97316] flex flex-col gap-4 md:block">
              <div className="lg:text-5xl text-3xl font-bold">1.2m+</div>
              <div className="lg:text-lg text-sm leading-4">
                Social Followers
              </div>
            </div>
          </div>
          
          {/* our services */}
          <div className="my-16 flex md:flex-row flex-col gap-8 lg:gap-28 items-center md:px-5 lg:px-0 px-0">
            <div className="text-center md:text-start flex flex-col gap-6 items-center md:items-start">
              <div className="flex flex-col gap-3">
                <p className="md:text-[28px] text-2xl leading-7 md:leading-8  capitalize font-bold text-[#F97316]">
                  our services
                </p>
                <h3 className="md:text-[44px] text-3xl lg:w-[460px] w-[380px] capitalize leading-9 md:leading-[53px] font-semibold text-[#525252]">
                  Trained to give you the best
                </h3>
              </div>
              <button className="py-2 px-4 bg-[#F97316] rounded-lg text-white font-medium text-sm leading-6 w-fit">
                Contact us
              </button>
            </div>
            <div>
              <p className="lg:w-[500px] w-[322px] lg:text-lg text-[16px] leading-5 font-normal text-[#525252] text-center lg:text-start">
                Since our founding in, Hng Boilerplate has been dedicated to
                constantly evolving to stay ahead of the curve. Our agile
                mindset and relentless pursuit of innovation ensure that you're
                always equipped with the most effective tools and strategies.
              </p>
            </div>
          </div>
          {/* our mission */}
          <div className="flex md:flex-row flex-col-reverse gap-14 lg:gap-0 justify-between items-center">
            <div className="md:w-[55%]  w-full">
              <img src="images/image.png" alt="mission img" />
            </div>
            <div className="lg:w-2/5 md:w-[50%] w-[382px] flex flex-col lg:gap-y-6 gap-4 text-center md:text-start px-4 lg:px-0">
              <div className=" flex flex-col gap-y-3">
                <h3 className="lg:text-[28px] text-2xl leading-7 lg:leading-8 font-bold text-[#F97316]">
                  Our mission
                </h3>
                <p className="lg:text-[44px] text-3xl lg:leading-[55px] leading-9 font-semibold text-[#525252]">
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
          <div className="my-16 flex md:flex-row flex-col gap-14 lg:gap-0 justify-between items-center">
            <div className="lg:w-2/5 md:w-[50%] w-[382px] flex flex-col lg:gap-y-6 gap-4 text-center md:text-start px-4 lg:px-0">
              <div className="flex flex-col gap-y-3">
                <h3 className="lg:text-[28px] text-2xl lg:leading-[33px] leading-7 font-bold text-[#F97316]">
                  Our Vision
                </h3>
                <p className="lg:text-[44px] text-3xl lg:leading-[53px] leading-9 font-semibold text-[#525252]">
                  Leading the Way, Redefining Industries
                </p>
              </div>
              <p className="lg:text-lg text-[16px] leading-5 font-normal">
                At Hng Boilerplate, Our vision is to revolutionize the industry
                landscape by continuously pushing the boundaries of innovation,
                setting new standards, and inspiring others to follow.
              </p>
            </div>
            <div className="md:w-[55%] w-full">
              <img src="images/image2.png" alt="vision img" />
            </div>
          </div>
          {/* our core value */}
          <div className="flex flex-col gap-8 px-5 lg:px-0">
            <div className="flex justify-center">
              <div className="lg:w-[500px] w-[382px] text-center text-[#525252] flex flex-col gap-y-3">
                <h3 className="lg:text-[44px] text-3xl lg:leading-[53px] leading-9 font-semibold">
                  Our Core Values
                </h3>
                <p className="font-normal lg:text-lg text-[16px] leading-5">
                  Our values shape the core of our organization and define the
                  character of our industry.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-[#F973161A] p-4 flex flex-col gap-y-6 rounded-[10px]">
                <h3 className="font-bold text-[28px] leading-8 text-[#F97316] text-center">
                  Integrity
                </h3>
                <p className="font-normal text-lg leading-5 text-[#525252] text-center lg:text-start">
                  We uphold the highest ethical standards in everything we do,
                  fostering trust and transparency with our clients, partners,
                  and employees. We believe that honesty and integrity are the
                  foundation of lasting success.
                </p>
              </div>
              <div className="bg-[#F973161A] p-4 flex flex-col gap-y-6 rounded-[10px]">
                <h3 className="font-bold text-[28px] leading-8 text-[#F97316] text-center">
                  Customer-Centricity
                </h3>
                <p className="font-normal text-lg leading-5 text-[#525252] text-center lg:text-start">
                  Our customers are at the heart of our business. We strive to
                  understand their needs, exceed their expectations, and build
                  lasting relationships based on trust and mutual respect. We
                  believe that putting our customers first is the key to
                  long-term success.
                </p>
              </div>
              <div className="bg-[#F973161A] p-4 flex flex-col gap-y-6 rounded-[10px]">
                <h3 className="font-bold text-[28px] leading-8 text-[#F97316] text-center">
                  Innovation
                </h3>
                <p className="font-normal text-lg leading-5 text-[#525252] text-center lg:text-start">
                  We embrace a culture of continuous improvement and creativity,
                  constantly seeking new ways to evolve and enhance our
                  products, services, and processes. We encourage
                  experimentation and risk-taking, recognizing that innovation
                  is essential for growth.
                </p>
              </div>
              <div className="bg-[#F973161A] p-4 flex flex-col gap-6 rounded-[10px]">
                <h3 className="font-bold text-[28px] leading-8 text-[#F97316] text-center">
                  Excellence
                </h3>
                <p className="font-normal text-lg leading-5 text-[#525252] text-center lg:text-start">
                  We are committed to delivering exceptional quality in
                  everything we do, from our products and services to our
                  customer interactions and internal processes. We strive for
                  continuous improvement and hold ourselves to the highest
                  standards of performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* executive team */}
          <section className="lg:h-[610px] h-fit lg:bg-custom-bg bg-mobile-b bg-cover  bg-no-repeat w-full my-16 flex justify-center items-end lg:pb-3">
            <div className="mt-24 md:mt-36">
              <div className="text-center px-4 lg:w-full">
                <h2 className="font-semibold lg:text-[44px] text-3xl text-[#525252] leading-9 lg:leading-[53px]">
                  The Executive Team
                </h2>
                <p className="lg:text-lg text-[16px] leading-5">
                  Meet Our Exclusive team that have been trained to meet your
                  needs.
                </p>
              </div>
              {/* cards */}
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-7 mt-8 w-72 md:w-full mx-auto">
                <div className="lg:w-72 h-fit bg-[#FAFAFA] flex flex-col gap-4 pb-[14px]">
                  <div className="bg-[#D3D3D3]">
                    <img src="images/team-image1.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-5 justify-between h-[152px] ps-[14px]">
                    <div className="text-[#525252]">
                      <h2
                        className="text-lg leading-5 font-semibold
                    "
                      >
                        John Abraham
                      </h2>
                      <p className="text-xs leading-4 font-normal mt-1">
                        Business Developer
                      </p>
                      <p className="font-normal text-sm leading-5 mt-2">
                        John is a strategic product manager with a keen eye for
                        market trends.
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <img
                        src="facebook.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="instagram.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="twitter.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-72 h-fit bg-[#FAFAFA] flex flex-col gap-4 pb-[14px]">
                  <div className="bg-[#D3D3D3]">
                    <img src="images/team-image2.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-5 justify-between h-[152px] ps-[14px]">
                    <div className="text-[#525252]">
                      <h2
                        className="text-lg leading-5 font-semibold
                    "
                      >
                        Addison mark
                      </h2>
                      <p className="text-xs leading-4 font-normal mt-1">
                        Software Engineer
                      </p>
                      <p className="font-normal text-sm leading-5 mt-2">
                        Addison our skilled frontend developer, brings websites
                        to life with clean code.
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <img
                        src="facebook.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="instagram.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="twitter.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-72 h-fit bg-[#FAFAFA] flex flex-col gap-4 pb-[14px]">
                  <div className="bg-[#D3D3D3]">
                    <img src="images/team-image3.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-between h-[152px] gap-y-5 ps-[14px]">
                    <div className="text-[#525252]">
                      <h2
                        className="text-lg leading-5 font-semibold
                    "
                      >
                        Joy Tony
                      </h2>
                      <p className="text-xs leading-4 font-normal mt-1">
                        Product Manager
                      </p>
                      <p className="font-normal text-sm leading-5 mt-2">
                        Joy is a passionate product manager driven by user
                        experience.
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <img
                        src="facebook.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="instagram.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="twitter.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:w-72 h-fit bg-[#FAFAFA] flex flex-col gap-4 pb-[14px]">
                  <div className="bg-[#D3D3D3]">
                    <img src="images/team-image4.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-5 justify-between h-[152px] ps-[14px]">
                    <div className="text-[#525252]">
                      <h2
                        className="text-lg leading-5 font-semibold
                    "
                      >
                        Johua Philip
                      </h2>
                      <p className="text-xs leading-4 font-normal mt-1">
                        Data Analyst
                      </p>
                      <p className="font-normal text-sm leading-5 mt-2">
                        Joshua, our data analyst, uses user data to optimize our
                        boilerplates for performance.
                      </p>
                    </div>
                    <div className="flex gap-6">
                      <img
                        src="facebook.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="instagram.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <img
                        src="twitter.svg"
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* join our team */}
          <section className="mb-28">
            <div className="text-center text-[#525252] flex flex-col items-center lg:gap-6 gap-4">
              <h2 className="lg:text-[44px] text-3xl font-semibold lg:leading-[53px] leading-9">
                Join Our Team{" "}
              </h2>
              <p className="lg:w-[729px]  mx-auto lg:text-lg text-[16px] leading-5 font-normal px-4">
                Interested in joining out team? View our Job Listing page for
                openings and apply with an equal chance of working with us!
              </p>
              <button className="py-2 px-4 bg-[#F97316] text-white rounded-[6px] w-fit text-sm font-medium">
                Join us
              </button>
            </div>
          </section>
        </section>
      </>
    );
}

export default About



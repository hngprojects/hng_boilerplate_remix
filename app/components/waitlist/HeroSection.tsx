const HeroSection = () => {
  return (
    <section className="flex h-max w-full flex-col gap-3 bg-white py-[100px] lg:bg-neutral-50">
      <div className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-[20px] px-2">
        <h1 className="w-[322px] text-center font-['Inter'] text-[32px] font-bold text-neutral-600 lg:w-[623px] lg:text-6xl">
          Join the waitlist and get early access!
        </h1>
        <div className="inline-flex h-16 w-[322px] items-center justify-center pb-[7px] lg:h-14 lg:w-[584px]">
          <h2 className="w-[322px] text-center font-['Inter'] text-base font-normal text-neutral-600 lg:w-[584px] lg:text-xl lg:leading-7">
            Transform your remote work meetings into fun and engaging sessions
            with our innovative game-based platform.{" "}
          </h2>
        </div>
        <div className="inline-flex h-[54px] w-[322px] items-center justify-center lg:h-7 lg:w-[584px]">
          <h3 className="w-[322px] text-center lg:w-[584px]">
            <span className="font-['Inter'] text-xl font-semibold leading-7 text-neutral-600">
              Be a part of the first 2300 users for a{" "}
            </span>
            <span className="font-['Inter'] text-xl font-semibold leading-7 text-orange-500">
              10% discount
            </span>
          </h3>
        </div>
        <div className="inline-flex h-11 items-center justify-center gap-2.5 rounded-md bg-stone-900 px-8">
          <button className="font-['Inter'] text-sm font-bold leading-normal text-slate-50">
            Join the Waitist
          </button>
        </div>
        <div className="mx-auto my-[20px] flex h-max w-max flex-col gap-10 lg:flex-row">
          <div className="relative order-2 h-[218px] w-80 lg:order-1">
            <div className="absolute left-0 top-0 h-[218px] w-80 rounded-lg border border-neutral-600 bg-neutral-50 p-6" />
            <div className="absolute left-[26px] top-[28px] h-[128.20px] w-[279.92px]">
              <div className="absolute left-0 top-0 h-[53px] w-[53px] rounded-full bg-orange-500" />
              <div className="absolute left-[12px] top-[12px] h-[30px] w-[30px]" />
              <div className="absolute left-0 top-[65px] inline-flex h-24 flex-col items-start justify-start gap-2">
                <div className="font-['Inter'] text-lg font-semibold leading-7 text-neutral-600">
                  Easy Customization
                </div>
                <div className="w-[252px] font-['Inter'] text-sm font-normal leading-tight text-neutral-600">
                  Tailor your experience to your specific needs and preferences
                  for maximum results
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 mt-[50px] flex flex-col gap-10 lg:order-2">
            <div className="relative h-[72px] w-80">
              <div className="absolute left-0 top-0 h-[72px] w-80 rounded-lg border border-neutral-600 bg-neutral-50 p-6" />
              <div className="absolute left-[27px] top-[15px] inline-flex h-[42px] w-[270px] items-center justify-start gap-6">
                <div className="flex h-[42px] w-24 items-center justify-start">
                  <div className="-m-2 h-10 w-10 rounded-[100%] border-2 border-white bg-pink-700" />
                  <div className="-m-2 h-10 w-10 rounded-[100%] border-2 border-white bg-rose-300" />
                  <div className="-m-2 h-10 w-10 rounded-[100%] border-2 border-white bg-red-200" />
                  <div className="-m-2 h-10 w-10 rounded-[100%] border-2 border-white bg-zinc-300" />
                </div>
                <div className="inline-flex w-[150px] flex-col items-start justify-start gap-1">
                  <div className="self-stretch font-['Inter'] text-xs font-normal text-gray-400">
                    Resource variety
                  </div>
                  <div className="self-stretch font-['Inter'] text-base font-medium text-black">
                    150+ Team support
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[218px] w-80">
              <div className="absolute left-0 top-0 h-[218px] w-80 rounded-lg border border-neutral-600 bg-neutral-50 p-6" />
              <div className="absolute left-[26px] top-[28px] h-[128.20px] w-[279.92px]">
                <div className="absolute left-0 top-0 h-[53px] w-[53px] rounded-full bg-orange-500" />
                <div className="absolute left-[12px] top-[12px] h-[30px] w-[30px]" />
                <div className="absolute left-0 top-[65px] inline-flex h-24 flex-col items-start justify-start gap-2">
                  <div className="font-['Inter'] text-lg font-semibold leading-7 text-neutral-600">
                    Scalable Foundation
                  </div>
                  <div className="w-[252px] font-['Inter'] text-sm font-normal leading-tight text-neutral-600">
                    Easily add new features and functionalities as needed to
                    grow your your product
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-3 h-[218px] w-80 lg:order-3">
            <div className="absolute left-0 top-0 h-[218px] w-80 rounded-lg border border-neutral-600 bg-neutral-50 p-6" />
            <div className="absolute left-[26px] top-[28px] h-[128.20px] w-[279.92px]">
              <div className="absolute left-0 top-0 h-[53px] w-[53px] rounded-full bg-orange-500" />
              <div className="absolute left-[12px] top-[12px] h-[30px] w-[30px]" />
              <div className="absolute left-0 top-[65px] inline-flex h-24 flex-col items-start justify-start gap-2">
                <div className="font-['Inter'] text-lg font-semibold leading-7 text-neutral-600">
                  Pre-built Sections
                </div>
                <div className="w-[252px] font-['Inter'] text-sm font-normal leading-tight text-neutral-600">
                  Leverage our prebuilt resources and sections to showcase your
                  product effectively
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

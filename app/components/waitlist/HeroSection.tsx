const HeroSection = () => {
  return (
    <section className="h-[95vh] w-full bg-white lg:bg-neutral-50">
      <div className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-[20px] px-2">
        <div className="w-[322px] text-center font-['Inter'] text-[32px] font-bold text-neutral-600 lg:w-[623px] lg:text-6xl">
          Join the waitlist and get early access!
        </div>
        <div className="inline-flex h-16 w-[322px] items-center justify-center pb-[7px] lg:h-14 lg:w-[584px]">
          <div className="w-[322px] text-center font-['Inter'] text-base font-normal text-neutral-600 lg:w-[584px] lg:text-xl lg:leading-7">
            Transform your remote work meetings into fun and engaging sessions
            with our innovative game-based platform.{" "}
          </div>
        </div>
        <div className="inline-flex h-[54px] w-[322px] items-center justify-center lg:h-7 lg:w-[584px]">
          <div className="w-[322px] text-center lg:w-[584px]">
            <span className="font-['Inter'] text-xl font-semibold leading-7 text-neutral-600">
              Be a part of the first 2300 users for a{" "}
            </span>
            <span className="font-['Inter'] text-xl font-semibold leading-7 text-orange-500">
              10% discount
            </span>
          </div>
        </div>
        <div className="inline-flex h-11 items-center justify-center gap-2.5 rounded-md bg-stone-900 px-8">
          <button className="font-['Inter'] text-sm font-bold leading-normal text-slate-50">
            Join the Waitist
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

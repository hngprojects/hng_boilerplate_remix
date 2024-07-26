import { FunctionComponent } from "react";

export type TopNavigationType = {
  className?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  icon4?: string;
};

const TopNavigation: FunctionComponent<TopNavigationType> = ({
  className = "",
  icon1 = "/icon1.svg",
  icon2 = "/icon2.svg",
  icon3 = "/icon3.svg",
  icon4 = "/icon4.svg",
}) => {
  return (
    <header
      className={`text-greyscale-900 font-body-bold-small border-lightgray sticky top-0 z-[99] box-border flex max-w-full flex-row items-center justify-between gap-[20px] self-stretch border-b-[1px] border-solid px-10 pb-3.5 pt-4 text-left text-5xl ${className}`}
    >
      <div className="mq700:gap-[25px] mq700:pr-[126px] mq700:box-border mq450:pr-5 mq450:box-border box-border flex max-w-full flex-row items-center justify-start gap-[50px] py-0 pl-0 pr-[252px]">
        <div className="flex flex-row items-center justify-start gap-[15px]">
          <img
            className="relative h-6 w-6 shrink-0 overflow-hidden"
            loading="lazy"
            alt="Home Icon"
            src="/icon.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative h-[18px] w-[18px]"
              loading="lazy"
              alt="Logo"
              src="/logo.svg"
            />
            <a className="relative whitespace-nowrap font-semibold text-[inherit] [text-decoration:none]">
              Boilerplate.
            </a>
          </div>
        </div>
        <nav className="font-body-bold-small mq975:hidden m-0 flex w-[183px] flex-row items-center justify-start gap-[22px] text-left text-xs text-black">
          <div className="flex flex-1 flex-row items-center justify-start gap-[4px]">
            <a className="relative inline-block min-w-[55px] font-medium leading-[20px] text-[inherit] [text-decoration:none]">
              Overview
            </a>
            <img
              className="relative hidden h-[15px] w-[15px] shrink-0 overflow-hidden"
              alt="Overview Icon"
              src={icon1}
            />
          </div>
          <div className="text-primary-primary-color flex flex-row items-center justify-start gap-[4px]">
            <a className="relative inline-block min-w-[32px] font-bold leading-[20px] text-[inherit] [text-decoration:none]">
              Email
            </a>
            <img
              className="relative hidden h-[15px] w-[15px] shrink-0 overflow-hidden"
              alt="Email Icon"
              src={icon2}
            />
          </div>
          <div className="flex flex-1 flex-row items-center justify-start gap-[4px]">
            <a className="relative inline-block min-w-[52px] font-medium leading-[20px] text-[inherit] [text-decoration:none]">
              Products
            </a>
            <img
              className="relative hidden h-[15px] w-[15px] shrink-0 overflow-hidden"
              alt="Products Icon"
              src={icon3}
            />
          </div>
          <div className="hidden flex-row items-center justify-start gap-[4px] self-stretch">
            <div className="relative self-stretch font-medium leading-[20px]">
              Settings
            </div>
            <img
              className="relative hidden h-[15px] w-[15px] shrink-0 overflow-hidden"
              alt="Settings Icon"
              src={icon4}
            />
          </div>
        </nav>
      </div>
      <div className="flex w-[438px] max-w-full flex-row items-center justify-start gap-[20px]">
        <div className="rounded-radius-rounded-md border-gainsboro flex flex-1 flex-col items-start justify-start border-[1px] border-solid bg-white px-0 pb-0.5 pt-0">
          <div className="mq450:pr-5 mq450:box-border flex flex-row items-center justify-start gap-[8px] self-stretch py-0 pl-3 pr-[126px]">
            <img
              className="relative h-4 w-4 shrink-0 overflow-hidden"
              alt="Search Icon"
              src="/magnifyingglass.svg"
            />
            <input
              className="font-body-bold-small text-neutral-colors-dark-1 box-border flex h-9 w-[calc(100%_-_154px)] min-w-[62px] flex-1 flex-row items-center justify-start border-none bg-transparent px-0 py-2 text-sm outline-none"
              placeholder="Search option..."
              type="text"
              aria-label="Search"
            />
          </div>
        </div>
        <img
          className="relative h-6 w-6"
          loading="lazy"
          alt="Notifications"
          src="/group-1.svg"
        />
        <img
          className="relative h-6 w-6 shrink-0 overflow-hidden"
          alt="Settings"
          src="/icon-1.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="relative h-10 w-10 object-cover"
            loading="lazy"
            alt="User Avatar"
            src="/avatar@2x.png"
          />
          <img
            className="relative h-5 w-5 shrink-0 overflow-hidden object-contain"
            loading="lazy"
            alt="User Menu"
            src="/secondary-icon@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;

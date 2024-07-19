import { FC } from "react";
import logo1 from "../../../public/images/logodesktop.png";
import logo2 from "../../../public/images/logomobile.png";
import menu from "../../../public/images/menu.png";
import account from "../../../public/images/account.png";
import notification from "../../../public/images/notification.png";

const Header: FC = () => {
  return (
    <header className="bg-[#FAFAFA] text-[#434343] max-w-screen h-[116px] px-4 md:px-[50px] xl:px-[120px] py-8 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <img src={logo1} alt="logo" className="mr-2.5 hidden lg:block" />
        <img src={menu} alt="menu-icon" className="mr-4 block md:hidden" />
        <img src={logo2} alt="logo" className="mr-2.5 block md:hidden" />
        <h3 className="text-[1.75rem] font-semibold text-center leading-8 text-[#525252]">
          HNG Boilerplate
        </h3>
      </div>

      <nav className="space-x-[-14px] hidden md:block">
        <a
          href="#"
          className="text-base font-medium leading-5 text-center px-8 py-2"
        >
          Home
        </a>
        <a
          href="#"
          className="text-base font-medium leading-5 text-center px-8 py-2"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-base font-medium leading-5 text-center px-8 py-2"
        >
          Career
        </a>
      </nav>
      <div className="space-x-2 md:space-x-8 md:hidden flex items-center justify-center">
        <img src={account} alt="account" className="mr-2" />
        <img src={notification} alt="notification" className="mr-2" />
      </div>
      <div className="space-x-8 hidden md:block">
        <button className="bg-[#FFFFFF] text-[#434343] border border-[#F97316] px-8 py-2 rounded-md h-11">
          Log In
        </button>
        <button className="bg-[#F97316] text-[#F8FAFC] px-8 py-2 rounded-md h-11">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;

import { FC, useState } from "react";

import account from "../../../public/images/account.png";
import logo1 from "../../../public/images/logodesktop.png";
import logo2 from "../../../public/images/logomobile.png";
import notification from "../../../public/images/notification.png";
import MenuButton from "../sidebar/menu-button";
import MobileSidebarComponent from "../sidebar/sidebar";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((previous: boolean) => !previous);
  }
  return (
    <header className="max-w-screen flex h-[116px] items-center justify-between bg-primary-foreground px-4 py-8 text-secondary-foreground md:px-[50px] xl:px-[120px]">
      {isMenuOpen && (
        <MobileSidebarComponent
          isMenuOpen={isMenuOpen}
          handleToggleMenu={handleToggleMenu}
        />
      )}
      <div className="flex items-center justify-center">
        <img src={logo1} alt="logo" className="mr-2.5 hidden lg:block" />
        <div className="mr-6">
          <MenuButton
            IsMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
          />
        </div>
        <img src={logo2} alt="logo" className="mr-2.5 block md:hidden" />
        <h3 className="text-center text-[1.75rem] font-semibold leading-8 text-muted-foreground">
          HNG Boilerplate
        </h3>
      </div>

      <nav className="hidden space-x-[-14px] text-muted-foreground md:block md:space-x-[-40px]">
        <a
          href="#"
          className="px-8 py-2 text-center text-base font-medium leading-5"
        >
          Home
        </a>
        <a
          href="#"
          className="px-8 py-2 text-center text-base font-medium leading-5"
        >
          Pricing
        </a>
        <a
          href="#"
          className="px-8 py-2 text-center text-base font-medium leading-5"
        >
          Career
        </a>
      </nav>
      <div className="flex items-center justify-center space-x-2 md:hidden md:space-x-8">
        <img src={account} alt="account" className="mr-2" />
        <img src={notification} alt="notification" className="mr-2" />
      </div>
      <div className="hidden space-x-8 md:block">
        <button className="h-11 rounded-md border border-primary bg-background px-8 py-2 text-secondary-foreground">
          Log In
        </button>
        <button className="h-11 rounded-md bg-primary px-8 py-2 text-background">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;

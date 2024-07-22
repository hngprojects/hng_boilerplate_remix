import { NavLink } from "@remix-run/react";
import { useState } from "react";

import { navigation } from "~/../data/navigationData";
import { Button } from "~/components/ui/button";

interface NavbarProperties {
  isUserAuthenticated: boolean;
}

const Navbar = ({ isUserAuthenticated }: NavbarProperties) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FAFAFA] px-6 py-6 text-[#525252] sm:px-12 lg:px-28">
      <div className="flex w-full max-w-[1440px] items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="lg:hidden">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="flex items-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <img src="~/../public/icons/nav-menu-icon.png" alt="" />
            </Button>
          </div>

          <NavLink to="/">
            <div className="flex items-center gap-2">
              <img
                className="w-[180px] sm:w-[220px] lg:w-[260px]"
                src="~/../public/icons/logo.svg"
                alt="App Logo"
              />
            </div>
          </NavLink>
        </div>

        <div className="hidden gap-6 font-medium lg:flex lg:gap-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-[#F97316]" : "hover:text-[#71717A]"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-6">
          {isUserAuthenticated ? (
            <>
              <NavLink to="/notifications">
                <img src="~/../public/icons/notification.png" alt="" />
              </NavLink>
              <NavLink to="/profile">
                <img src="~/../public/icons/general.png" alt="" />
              </NavLink>
            </>
          ) : (
            <>
              <Button
                className="hidden border border-[#F97316] bg-white text-sm font-medium text-[#434343] hover:border-0 hover:text-white lg:block"
                size="lg"
              >
                Log In
              </Button>
              <Button
                className="hidden bg-[#F97316] text-sm lg:block"
                size="lg"
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

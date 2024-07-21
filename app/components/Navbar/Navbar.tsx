// import { useState } from 'react';
import { NavLink } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { navigation } from '~/../data/navigationData';



interface NavbarProps {
  isUserAuthenticated: boolean;
}

const Navbar = ({ isUserAuthenticated }: NavbarProps) => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  // For Mobile Nav SideBar

  return (
    <nav className="bg-[#FAFAFA] text-[#525252] px-6 py-6 sm:px-12 lg:px-28">
      <div className="max-w-[1440px] w-full flex items-center justify-between">

        <div className='flex items-center gap-5'>
          <div className="lg:hidden">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="flex items-center"
            // onClick={() => setMobileMenuOpen((prev) => !prev)} // For Mobile NavBar
            >
              <img src="~/../public/icons/nav-menu-icon.png" alt="" />
            </Button>
          </div>

          <NavLink to="/">
            <div className='flex items-center gap-2'>
              <img className="w-[180px] sm:w-[220px] lg:w-[260px]" src="~/../public/icons/logo.svg" alt="App Logo" />
            </div>
          </NavLink>
        </div>


        <div className='hidden lg:flex gap-6 lg:gap-12 font-medium'>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => (isActive ? 'text-[#F97316]' : 'hover:text-[#71717A]')}
            >
              {item.name}
            </NavLink>
          ))}
        </div>


        <div className='flex gap-6'>
          {!isUserAuthenticated ? (
            <>
              <Button className="hidden lg:block text-sm font-medium bg-white text-[#434343] border border-[#F97316] hover:text-white hover:border-0" size="lg">Log In</Button>
              <Button className="hidden lg:block text-sm bg-[#F97316]" size="lg">Get Started</Button>
            </>
          ) : (
            <>
              <NavLink to="/notifications"><img src="~/../public/icons/notification.png" alt="" /></NavLink>
              <NavLink to="/profile"><img src="~/../public/icons/general.png" alt="" /></NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
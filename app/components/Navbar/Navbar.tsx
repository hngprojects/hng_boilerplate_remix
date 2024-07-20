// import { useState } from 'react';
import { NavLink } from '@remix-run/react';
import { Button } from '~/components/ui/button';

interface NavbarProps {
  isUserAuthenticated: boolean;
}

const Navbar = ({ isUserAuthenticated }: NavbarProps) =>  {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  // For Mobile Nav SideBar

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Career', to: '/career' },
  ];

  return (
    <nav className="bg-[#FAFAFA] text-[#525252] p-4 sm:px-12 md:px-2 lg:px-32">
      <div className="max-w-[1440px] w-full flex items-center justify-between">

        <div className='flex items-center gap-5'>
          <div className="md:hidden">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="flex items-center"
              // onClick={() => setMobileMenuOpen((prev) => !prev)} // For Mobile NavBar
            >
              <img src="~/../public/nav-icons/nav-menu-icon.png" alt="" />
            </Button>
          </div>

          <NavLink to="/">
            <div className='flex items-center gap-2'>
              <img className="w-[180px] sm:w-[220px] lg:w-[275px]" src="../../../public/nav-icons/logo.svg" alt="App Logo" />
            </div>
          </NavLink>
        </div>


        <div className='hidden md:flex gap-6 lg:gap-12 font-medium'>
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


        <div className='flex gap-2 lg:gap-8'>
          {!isUserAuthenticated ? (
            <>
              <Button className="hidden md:block text-sm font-medium bg-white text-[#434343] border border-[#F97316] hover:text-white hover:border-0" size="lg">Log In</Button>
              <Button className="hidden md:block text-sm bg-[#F97316]" size="lg">Get Started</Button>
            </>
          ) : (
            <>
              <NavLink to="/notifications" className="hidden sm:block"><img src="~/../public/nav-icons/nav-tab-bell-icon.png" alt="" /></NavLink>
              <NavLink to="/profile" className="hidden sm:block"><img src="~/../public/nav-icons/nav-tab-profile-icon.png" alt="" /></NavLink>

              {/* Mobile Icons */}
              <NavLink to="/notifications" className="sm:hidden"><img src="~/../public/nav-icons/nav-mobile-bell-icon.png" alt="" /></NavLink>
              <NavLink to="/profile" className="sm:hidden"><img src="~/../public/nav-icons/nav-mobile-profile-icon.png" alt="" /></NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
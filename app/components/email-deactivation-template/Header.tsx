import React from 'react';
// import Icons from './Icons';

interface HeaderProps {
  logo: string;
  cname: string;
}

const Header: React.FC<HeaderProps> = ({ logo, cname }) => (
  <div className="text-center w-full flex items-center gap-2 justify-center py-8 bg-gray-100">
    <img src={logo} alt="Company Logo" className="w-5 img-width" />
    
    
    <h1 className="text-xl font-bold ">{cname}</h1>
  </div>
);

export default Header;



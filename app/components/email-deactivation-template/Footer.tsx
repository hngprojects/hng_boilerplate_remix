import React from 'react';

interface FooterProps {
  lin: string;
  x: string;
  ig: string;
  disc: string;
  tt: string;

  sub: string;
  cust: string;
  pref: string;
}

const Footer: React.FC<FooterProps> = ({ sub, cust, pref, lin, x, ig, disc, tt }) => (
  <div className="w-full mx-auto py-4  bg-gray-100">

    <div className=' border-b border-dashed border-gray-400 w-4/5 mx-auto py-4'>
        <div className="  space-x-8 w-3/5 flex justify-center mx-auto my-8">
          <a href="https://facebook.com" className=" text-blue-600"><img src={x} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={ig} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={tt} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={disc} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={lin} alt="social icon" className="w-5 img-width" /></a>
        </div>


        <p className="my-12 text-gray-700">Thank you for choosing our service. Need help? <a href={cust} className="text-black-400 underline">Contact our customer support</a></p>
    
    </div>

    

    <div className='w-4/5 mx-auto py-4'>
      <p className='py-4  text-gray-700'>You are receiving this email because you signed up at Boilerplate.com. Want to change how you receive these emails?</p>
      <p className='py-4 text-gray-700'>You can <a href={pref} className='font-bold'>update your preferences</a> or <a href={sub}  className='font-bold'>unsubscribe from this list.</a> </p>
    </div>

  </div>
);

export default Footer;

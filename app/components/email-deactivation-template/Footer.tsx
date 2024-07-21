import React from 'react';

interface FooterProps {
  lin: string;
  x: string;
  ig: string;
  disc: string;
  tt: string;
}

const Footer: React.FC<FooterProps> = ({ lin, x, ig, disc, tt }) => (
  <div className="w-full mx-auto py-8  bg-gray-100">

    <div className='w-4/5 mx-auto py-6'>
        <div className="space-x-4 w-3/5 flex justify-center mx-auto my-12">
          <a href="https://facebook.com" className="text-blue-600"><img src={x} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={ig} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={tt} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={disc} alt="social icon" className="w-5 img-width" /></a>
          <a href="https://facebook.com" className="text-blue-600"><img src={lin} alt="social icon" className="w-5 img-width" /></a>
        </div>


        <p className="my-8">Thank you for choosing our service. Need help? <a href="https://example.com/support" className="text-blue-600 underline">Contact our customer support</a></p>
    
    </div>

    <hr />

    <div className='w-4/5 mx-auto py-6'>
      <p className='py-4'>You are receiving this email because you signed up at Boilerplate.com. Want to change how you receive these emails?</p>
      <p className='py-4'>You can update your preferences or unsubscribe from this list.</p>
    </div>

  </div>
);

export default Footer;

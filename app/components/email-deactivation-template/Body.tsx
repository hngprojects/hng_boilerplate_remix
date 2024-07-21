import React from 'react';

interface BodyProps {
  name: string;
  email: string;
  lastActive: string;
  deactivationDate: string;
  supportEmail: string;
  supportPhone: string;
  image: string;
  title: string;
}

const Body: React.FC<BodyProps> = ({ name, email, lastActive, deactivationDate, supportEmail, title, supportPhone, image }) => (
  <div className="w-full ">

    <img src={image} alt="Error icon" className="w-1/10 img-width mx-auto my-12" />

    <h2 className='text-lg text-center w-4/6 mx-auto   font-bold my-8'>{title}</h2>

        <div className='w-4/5   mx-auto my-12 mt-1/5'>
            <p className="font-bold   mb-4">Hi {name},</p>
            <p className="mb-4  text-gray-700">We hope this email finds you well. We wanted to inform you that your account has been deactivated due to a prolonged period of inactivity.</p>
            
            <h2 className="text-lg font-semibold mb-2">Your deactivation details:</h2>

            <ul className="list-none   my-4">
              <li className='flex my-4 items-center gap-4'><div className='w-2 h-2 bg-orange-500 rounded'></div><p className='font-bold  text-sm'>Account Email:</p> <span className='text-gray-500 text-sm'>{email}</span></li>
              <li className='flex my-4 items-center gap-4'><div className='w-2 h-2 bg-orange-500 rounded'></div><p className='font-bold text-sm'>Last Active:</p> <span className='text-gray-500 text-sm'>{lastActive}</span></li>
              <li className='flex my-4 items-center gap-4'><div className='w-2 h-2 bg-orange-500 rounded'></div><p className='font-bold text-sm'>Deactivation Date:</p> <span className='text-gray-500 text-sm'>{deactivationDate}</span></li>
            </ul>

            <p className="my-8 text-gray-700">If you would like to re-activate your account, you can easily do so by contacting our support team via the details below:</p>
            <p className="my-8">Give us a call at <span className='font-bold text-black-900'> {supportPhone} </span>or shoot us an email at <a href={`mailto:${supportEmail}`} className="text-black-800 font-bold underline">{supportEmail}</a></p>
            <p className=' text-gray-700'>We value your membership and would love to have you back.</p>
          
        </div>

    <div className='salute  w-4/5 mx-auto mb-4'>
      <p className='py-2'>Regards</p>
      <p className=''> Boilerplate</p>
    </div>
  
  
  
  </div>
);

export default Body;


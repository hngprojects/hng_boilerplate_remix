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

    <img src={image} alt="Error icon" className="w-1/12 img-width mx-auto my-12" />

    <h2 className='text-lg text-center font-bold my-8'>{title}</h2>

        <div className='w-4/5 mx-auto my-12'>
            <p className="mb-4">Hi {name},</p>
            <p className="mb-4">We hope this email finds you well. We wanted to inform you that your account has been deactivated due to a prolonged period of inactivity.</p>
            
            <h2 className="text-lg font-semibold mb-2">Your deactivation details:</h2>

            <ul className="list-disc ml-5 mb-4">
              <li>Account Email: {email}</li>
              <li>Last Active: {lastActive}</li>
              <li>Deactivation Date: {deactivationDate}</li>
            </ul>

            <p className="mb-4">If you would like to re-activate your account, you can easily do so by contacting our support team via the details below:</p>
            <p className="mb-4">Give us a call at {supportPhone} or shoot us an email at <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a></p>
            <p>We value your membership and would love to have you back.</p>
          
        </div>

    <div className='salute  w-4/5 mx-auto mb-4'>
      <p className='line-height-5'>
      Regards, <br />
      Boilerplate
      </p>
    </div>
  
  
  
  </div>
);

export default Body;


// import React from 'react';

// interface BodyProps {
//   name: string;
//   email: string;
//   lastActive: string;
//   deactivationDate: string;
//   supportEmail: string;
//   supportPhone: string;
// }

// const Body: React.FC<BodyProps> = ({ name, email, lastActive, deactivationDate, supportEmail, supportPhone }) => (
//   <div className="p-6">
//     <p className="mb-4">Hi {name},</p>
//     <p className="mb-4">We hope this email finds you well. We wanted to inform you that your account has been deactivated due to a prolonged period of inactivity.</p>
//     <h2 className="text-lg font-semibold mb-2">Your deactivation details:</h2>
//     <ul className="list-disc ml-5 mb-4">
//       <li>Account Email: {email}</li>
//       <li>Last Active: {lastActive}</li>
//       <li>Deactivation Date: {deactivationDate}</li>
//     </ul>
//     <p className="mb-4">If you would like to re-activate your account, you can easily do so by contacting our support team via the details below:</p>
//     <p className="mb-4">
//       Email: <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">{supportEmail}</a>
//       <br />
//       Phone: {supportPhone}
//     </p>
//   </div>
// );

// export default Body;

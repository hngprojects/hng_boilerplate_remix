import React from 'react';

interface ResetPasswordEmailProps {
  recipientName: string;
  resetLink: string;
}

const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({ recipientName, resetLink }) => (
  <div className="font-inter bg-white m-0 p-0">
    <div className="max-w-2xl mx-auto bg-white p-5">
      <div className="text-center py-5">
        <h1 className="m-0 text-black text-2xl font-semibold">Reset Your Password</h1>
      </div>
      <div className="py-5">
        <p className="m-0 mb-5 text-gray-900 text-lg font-semibold">Hi {recipientName},</p>
        <p className="m-0 mb-5 text-gray-900 text-base">You recently requested to reset your password. If you did not make this request, you can ignore this email.</p>
        <p className="m-0 mb-5 text-gray-900 text-base">To reset your password, please click the button below.</p>
        <p className="text-center">
          <a href={resetLink} className="inline-block py-2.5 px-10 bg-orange-500 text-white no-underline rounded font-medium">
            Reset Password
          </a>
        </p>
      </div>
      <div className="py-5 text-gray-900 text-base font-medium">
        <p className="m-0">Regards,</p>
        <p className="m-0">Boilerplate</p>
      </div>
    </div>
  </div>
);

export default ResetPasswordEmail;

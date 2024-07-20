import React from 'react';

interface ResetPasswordEmailProps {
  recipientName: string;
  resetLink: string;
}

const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({ recipientName, resetLink }) => (
  <div style={{
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#ffffff',
    margin: '0',
    padding: '0',
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '20px',
    }}>
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <h1 style={{ margin: '0', color: '#0A0A0A', fontSize: '29px', fontWeight: '600' }}>Reset Your Password</h1>
      </div>
      <div style={{ padding: '20px 0' }}>
        <p style={{ margin: '0 0 20px', color: '#111111E5', fontSize: '18px', fontWeight: 600  }}>Hi {recipientName},</p>
        <p style={{ margin: '0 0 20px', color: '#111111E5', fontSize: "14px" }}>You recently requested to reset your password. If you did not make this request, you can ignore this email.</p>
        <p style={{ margin: '0 0 20px', color: '#111111E5', fontSize: "14px" }}>To reset your password, please click the button below.</p>
        <p style={{ textAlign: 'center' }}>
          <a href={resetLink} style={{
            display: 'inline-block',
            padding: '10px 40px',
            backgroundColor: '#F97316',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '500',
          }}>Reset Password</a>
        </p>
      </div>
      <div style={{
        padding: '20px 0',
        color: '#111111',
        fontSize: '14px',
        fontWeight: 500
      }}>
        <p style={{ margin: '0' }}>Regards,</p>
        <p style={{ margin: '0' }}>Boilerplate</p>
      </div>
    </div>
  </div>
);

export default ResetPasswordEmail;

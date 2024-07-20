import React from 'react';
import { render } from '@testing-library/react';
import CheckedDeactivationEmail from './checked-deactivation-email';

describe('Email component', () => {
  const deactivationDetails = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    dateTime: '20th July, 2024 / 11:56pm'
  };

  it('renders email content correctly', () => {
    const { getByText, getByAltText } = render(<CheckedDeactivationEmail deactivationDetails={deactivationDetails} />);

    // Test that the main title is rendered
    expect(getByText('Account Successfully Deactivated')).toBeInTheDocument();

    // Test that the name is rendered correctly in the greeting
    expect(getByText(`Hi ${deactivationDetails.name},`)).toBeInTheDocument();

    // Test that the email details are rendered correctly
    expect(getByText(`Account Email: ${deactivationDetails.email}`)).toBeInTheDocument();
    expect(getByText(`Deactivation Date: ${deactivationDetails.dateTime}`)).toBeInTheDocument();

    // Test that the footer content is rendered
    expect(getByText('Thank you for choosing Boilerplate.com')).toBeInTheDocument();

    // Test that the logo alt text is correct
    expect(getByAltText('Logo')).toBeInTheDocument();
  });
});
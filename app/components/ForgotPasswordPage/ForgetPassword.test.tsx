import { render, screen } from '@testing-library/react';
import ForgotPassword from './ForgotPasswordPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('ForgotPassword Component', () => {
  it('renders Forgot Password page', () => {
    render(
      <Router>
        <ForgotPassword />
      </Router>
    );

    expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();

    expect(screen.getByText(/Send/i)).toBeInTheDocument();
    
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});

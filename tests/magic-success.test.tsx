import { render, screen } from "@testing-library/react";
import MagicSuccessPage from "../app/routes/magic-success";
import React from "react";
import "@testing-library/jest-dom";
import { expect, test, vi } from 'vitest';


// Mock components
vi.mock('~/components/ui/header', () => ({
  default: () => <div>Mock Header</div>
}));

vi.mock('~/components/ui/footer', () => ({
  default: () => <div>Mock Footer</div>
}));

test('renders MagicSuccessPage correctly', () => {
  render(<MagicSuccessPage />);
  
  // Assertions to ensure the page renders correctly
  expect(screen.getByText('Sent! Check your email.')).toBeInTheDocument();
  expect(screen.getByAltText('success')).toBeInTheDocument();
  expect(screen.getByText('We have sent an email to talk2johnsnow@gmail.com. It contains instructions on how to get started.')).toBeInTheDocument();
  expect(screen.getByText('Open Email')).toBeInTheDocument();
});
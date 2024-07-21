import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";

import ForgotPassword from "./ForgotPasswordPage";

describe("ForgotPassword Component", () => {
  it("renders Forgot Password page", () => {
    render(
      <Router>
        <ForgotPassword />
      </Router>,
    );

    expect(screen.getByText(/forgot password/i)).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/send/i)).toBeInTheDocument();

    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});

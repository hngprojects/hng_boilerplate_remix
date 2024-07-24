import { render, screen } from "@testing-library/react";
import { FaCheck, FaInfo, FaTimes } from "react-icons/fa";
import { describe, expect, it } from "vitest";

import Badge from "../badge";

describe("Badge", () => {
  it("renders the label correctly", () => {
    render(<Badge label="Test Label" variant="default" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders the icon correctly", () => {
    render(<Badge label="Test Label" variant="default" icon={<FaCheck />} />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("applies the correct variant styles", () => {
    render(<Badge label="Primary" variant="primary" />);
    expect(screen.getByText("Primary")).toHaveClass("bg-blue-500 text-white");
  });

  it("applies the correct variant styles for success", () => {
    render(<Badge label="Success" variant="success" />);
    expect(screen.getByText("Success")).toHaveClass("bg-green-500 text-white");
  });

  it("applies the correct variant styles for error", () => {
    render(<Badge label="Error" variant="error" />);
    expect(screen.getByText("Error")).toHaveClass("bg-red-500 text-white");
  });

  it("renders the correct icon with default variant", () => {
    render(<Badge label="Default" variant="default" icon={<FaInfo />} />);
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("renders the correct icon with primary variant", () => {
    render(<Badge label="Primary" variant="primary" icon={<FaCheck />} />);
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("renders the correct icon with success variant", () => {
    render(<Badge label="Success" variant="success" icon={<FaCheck />} />);
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("renders the correct icon with error variant", () => {
    render(<Badge label="Error" variant="error" icon={<FaTimes />} />);
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("has the correct accessibility attributes", () => {
    render(<Badge label="Accessible Badge" variant="default" />);
    const badge = screen.getByText("Accessible Badge");
    expect(badge).toHaveAttribute("role", "status");
    expect(badge).toHaveAttribute("aria-label", "Accessible Badge");
  });
});

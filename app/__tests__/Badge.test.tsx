import { render, screen } from "@testing-library/react";
import Badge from "../components/ui/badge";
import { FaCheck, FaTimes, FaInfo } from "react-icons/fa";
import { describe, it, expect } from "vitest";

describe("Badge", () => {
  it("renders the label correctly", () => {
    render(<Badge label="Test Label" variant="default" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders the icon correctly", () => {
    render(<Badge label="Test Label" variant="default" icon={<FaCheck />} />);
    expect(screen.getByTestId("badge-icon")).toBeInTheDocument();
  });

  it("applies the correct variant styles for default", () => {
    render(<Badge label="Default" variant="default" />);
    expect(screen.getByText("Default")).toHaveClass(
      "bg-gray-200 text-gray-800"
    );
  });

  it("applies the correct variant styles for primary", () => {
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

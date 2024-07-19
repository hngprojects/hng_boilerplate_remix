import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import QuestionForm from "~/components/faq/form";

describe("FAQ Question Form", async () => {
  beforeEach(() => {
    render(<QuestionForm />);
  });
  // afterEach(()=>)

  describe("renders inputs and button correctly", () => {
    it("form is rendered", () => {
      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.getByTestId("description")).toBeInTheDocument();
      expect(screen.getByTestId("name")).toBeInTheDocument();
      expect(screen.getByTestId("email")).toBeInTheDocument();
      expect(screen.getByTestId("phoneNumber")).toBeInTheDocument();
      expect(screen.getByTestId("message")).toBeInTheDocument();
      expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    });

    it("fields are accepting inputs", () => {
      // Fill out the form fields
      fireEvent.change(screen.getByTestId("name"), {
        target: { value: "John Doe" },
      });
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: "yusuffabdulmalik@gmail.com" },
      });
      fireEvent.change(screen.getByTestId("phoneNumber"), {
        target: { value: "08147359155" },
      });
      fireEvent.change(screen.getByTestId("message"), {
        target: { value: "This is a message." },
      });
      expect(screen.getByTestId("name")).toHaveValue("John Doe");
      expect(screen.getByTestId("email")).toHaveValue(
        "yusuffabdulmalik@gmail.com"
      );
      expect(screen.getByTestId("phoneNumber")).toHaveValue("08147359155");
      expect(screen.getByTestId("message")).toHaveValue("This is a message.");
    });
    it("button is not disabled and is clickable when inputs are entered correctly", async () => {
      fireEvent.change(screen.getByTestId("name"), {
        target: { value: "John Doe" },
      });
      fireEvent.change(screen.getByTestId("email"), {
        target: { value: "yusuffabdulmalik@gmail.com" },
      });
      fireEvent.change(screen.getByTestId("phoneNumber"), {
        target: { value: "08147359155" },
      });
      fireEvent.change(screen.getByTestId("message"), {
        target: { value: "This is a message." },
      });
      await waitFor(() => {
        expect(screen.getByTestId("submit-button")).not.toBeDisabled();
      });
    });
  });
});

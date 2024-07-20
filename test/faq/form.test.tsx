import { render, screen, cleanup } from "@testing-library/react";
import RTLUserEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import QuestionForm from "~/components/faq/form";

function setup(jsx: JSX.Element) {
  return {
    user: RTLUserEvent.setup(),
    ...render(jsx),
  };
}

describe("FAQ Question Form", async () => {
  beforeEach(() => {});

  afterEach(() => cleanup());

  describe("renders inputs and button correctly", () => {
    it("form is rendered", () => {
      render(<QuestionForm />);
      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.getByTestId("description")).toBeInTheDocument();
      expect(screen.getByTestId("name")).toBeInTheDocument();
      expect(screen.getByTestId("email")).toBeInTheDocument();
      expect(screen.getByTestId("phoneNumber")).toBeInTheDocument();
      expect(screen.getByTestId("message")).toBeInTheDocument();
      expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    });

    it("fields are accepting inputs", async () => {
      const { user, getByTestId } = setup(<QuestionForm />);
      await user.type(getByTestId("name"), "John Doe");
      await user.type(getByTestId("email"), "yusuffabdulmalik@gmail.com");
      await user.type(getByTestId("phoneNumber"), "08147359155");
      await user.type(getByTestId("message"), "This is a message.");

      expect(getByTestId("name")).toHaveValue("John Doe");
      expect(getByTestId("email")).toHaveValue("yusuffabdulmalik@gmail.com");
      expect(getByTestId("phoneNumber")).toHaveValue("08147359155");
      expect(getByTestId("message")).toHaveValue("This is a message.");
    });

    it("button is not disabled and is clickable on valid inputs", async () => {
      const { user, getByTestId } = setup(<QuestionForm />);
      // Fill out the form fields
      await user.type(getByTestId("name"), "John Doe");
      await user.type(getByTestId("email"), "yusuffabdulmalik@gmail.com");
      await user.type(getByTestId("phoneNumber"), "08147359155");
      await user.type(getByTestId("message"), "This is a message.");

      expect(getByTestId("submit-button")).not.toBeDisabled();
    });
  });
  describe("on submission", () => {
    it("clear fields on success", async () => {
      const { user, getByTestId } = setup(<QuestionForm />);

      await user.type(getByTestId("name"), "John Doe");
      await user.type(getByTestId("email"), "yusuffabdulmalik@gmail.com");
      await user.type(getByTestId("phoneNumber"), "08147359155");
      await user.type(getByTestId("message"), "This is a message.");

      await user.click(getByTestId("submit-button"));

      expect(getByTestId("name")).toHaveValue("");
      expect(getByTestId("email")).toHaveValue("");
      expect(getByTestId("phoneNumber")).toHaveValue("");
      expect(getByTestId("message")).toHaveValue("");
    });
  });
});

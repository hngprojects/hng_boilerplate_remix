import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Subscription, {
  type SubscriptionProps,
} from "~/components/EmailSubRenewal/EmailRenewal";

const mockProperties: SubscriptionProps = {
  title: "Subscription Renewal Reminder",
  name: "John Doe",
  image: "path/to/image.png",
  email: "help@boilerplate.com",
  renewalDate: "17th September, 2024",
  renewalPrice: "$20.89",
  renewalPeriod: "Bi-monthly",
  reviewSubscriptionLink: "http://example.com/review",
  renewSubscriptionLink: "Renew Subscription",
};

describe("Subscription Component", () => {
  it("renders the component with dynamic data", () => {
    render(<Subscription {...mockProperties} />);

    expect(screen.getByText(mockProperties.title)).toBeInTheDocument();
    expect(screen.getByText(`Hi ${mockProperties.name},`)).toBeInTheDocument();
    expect(screen.getByText(mockProperties.renewalDate)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockProperties.renewalPrice}/${mockProperties.renewalPeriod} features`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockProperties.renewSubscriptionLink),
    ).toBeInTheDocument();
  });

  it("renders the image correctly", () => {
    render(<Subscription {...mockProperties} />);
    const img = screen.getByAltText("");

    expect(img).toHaveAttribute("src", mockProperties.image);
  });

  it("displays the email link properly", () => {
    render(<Subscription {...mockProperties} />);
    const emailLink = screen.getByText(mockProperties.email);

    expect(emailLink.closest("a")).toHaveAttribute(
      "href",
      `mailto:${mockProperties.email}`,
    );
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Subscription {...mockProperties} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

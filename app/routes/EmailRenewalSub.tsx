import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import SVG from "../../public/pana.png";
import Subscription from "../components/EmailSubRenewal/EmailRenewal";

interface SubscriptionProperties {
  title: string;
  name: string;
  image: string;
  email: string;
  renewalDate: string;
  renewalPrice: string;
  renewalPeriod: string;
  reviewSubscriptionLink: string;
  renewSubscriptionLink: string;
}

export const loader = async () => {
  const data = {
    title: " Subscription Renewal Reminder",
    name: "John Doe",
    image: SVG,
    email: "help@boilerplate.com",
    renewalDate: "17th September, 2024",
    renewalPrice: "$20.89",
    renewalPeriod: "Bi-monthly",
    reviewSubscriptionLink: "",
    renewSubscriptionLink: "Renew Subscription",
  };

  return json(data);
};

export default function Index() {
  const data = useLoaderData<SubscriptionProperties>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Subscription {...data} />
    </div>
  );
}

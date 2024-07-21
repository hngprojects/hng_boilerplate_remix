import { renderToStaticMarkup } from "react-dom/server";

import type {
  Subscription,
  SubscriptionProps,
} from "../../components/EmailSubRenewal/EmailRenewal";

export const renderSubscriptionRenewalEmail = (props: SubscriptionProps) => {
  return renderToStaticMarkup(<Subscription>{ ...props });
};

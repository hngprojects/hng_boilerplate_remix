import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import "~/styles/global.css";

export function AccordionComponent() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-[588px] rounded-xl bg-primary/5 p-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What payment method do you accept?</AccordionTrigger>
        <AccordionContent>
          We accept payment using Visa, Mastercard and American Express.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Is there a discount for annual subscriptions?
        </AccordionTrigger>
        <AccordionContent>
          Yes. There is a 20% discount for annual subscriptions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer a 14-day free trial for new users. You can explore all
          the features of our premium plan without any cost during this period.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import PricingCard from "./PricingCard";

const PricingPage = () => {
  const [selectedCard, setSelectedCard] = useState<string | undefined>();

  const handleCardClick = (cardName: string) => {
    setSelectedCard(cardName);
  };

  return (
    <main>
      <div className="container my-10 flex flex-col items-center px-8">
        <p className="rounded-lg bg-secondary px-4 py-2 text-xl font-light">
          Pricing
        </p>
        <div className="mt-5 flex w-full max-w-5xl flex-col items-center text-center">
          <h2 className="text-2xl font-semibold leading-none md:text-6xl">
            Simple and <span className="text-primary">Affordable</span> Pricing
            Plan
          </h2>
          <p className="mt-5 w-full text-lg font-light leading-tight md:w-9/12 md:text-2xl">
            Our flexible plans are designed to scale with your business. We have
            a plan for you.
          </p>
        </div>

        <Tabs defaultValue="account" className="mt-10">
          <TabsList className="mx-auto grid w-96 grid-cols-2">
            <TabsTrigger value="account">Monthly</TabsTrigger>
            <TabsTrigger value="password">Annual (save 20%)</TabsTrigger>
          </TabsList>
          <TabsContent
            value="account"
            className="mt-5 gap-5 space-y-5 md:flex md:space-y-0"
          >
            <PricingCard
              title="Basic"
              price="$800"
              period="month"
              description="The essentials to provide your best work for clients."
              features={[
                { text: "2 Projects", included: true },
                { text: "Up to 100 subscribers", included: true },
                { text: "Basic analytics", included: true },
                { text: "24-hour support response time", included: true },
                { text: "Marketing advisor", included: false },
                { text: "Custom integration", included: false },
              ]}
              buttonText="Continue"
              borderColor="border-primary"
              onClick={() => handleCardClick("basic-monthly")}
              isSelected={selectedCard === "basic-monthly"}
            />
            <PricingCard
              title="Premium"
              price="$3,000"
              period="month"
              description="The essentials to provide your best work for clients."
              features={[
                { text: "25 Projects", included: true },
                { text: "Up to 10,000 subscribers", included: true },
                { text: "Advanced analytics", included: true },
                { text: "24-hour support response time", included: true },
                { text: "Marketing advisor", included: true },
                { text: "Custom integration", included: true },
              ]}
              buttonText="Continue"
              borderColor="border-primary"
              onClick={() => handleCardClick("premium-monthly")}
              isSelected={selectedCard === "premium-monthly"}
            />
          </TabsContent>
          <TabsContent
            value="password"
            className="mt-5 gap-5 space-y-5 md:mt-0 md:flex md:space-y-0"
          >
            <PricingCard
              title="Basic"
              price="$500"
              period="month"
              description="The essentials to provide your best work for clients."
              features={[
                { text: "2 Projects", included: true },
                { text: "Up to 100 subscribers", included: true },
                { text: "Basic analytics", included: true },
                { text: "24-hour support response time", included: true },
                { text: "Marketing advisor", included: false },
                { text: "Custom integration", included: false },
              ]}
              buttonText="Continue"
              borderColor="border-primary"
              onClick={() => handleCardClick("basic-annual")}
              isSelected={selectedCard === "basic-annual"}
            />
            <PricingCard
              title="Premium"
              price="$2,000"
              period="month"
              description="The essentials to provide your best work for clients."
              features={[
                { text: "25 Projects", included: true },
                { text: "Up to 10,000 subscribers", included: true },
                { text: "Advanced analytics", included: true },
                { text: "24-hour support response time", included: true },
                { text: "Marketing advisor", included: true },
                { text: "Custom integration", included: true },
              ]}
              buttonText="Continue"
              borderColor="border-primary"
              onClick={() => handleCardClick("premium-annual")}
              isSelected={selectedCard === "premium-annual"}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default PricingPage;

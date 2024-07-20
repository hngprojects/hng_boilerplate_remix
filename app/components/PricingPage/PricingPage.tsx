import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import PricingCard from "./PricingCard";  // Adjust the path as needed

const PricingPage = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardName: string) => {
    setSelectedCard(cardName);
  };

  return (
    <main>
      <div className="container flex flex-col items-center px-10 my-10">
        <p className="bg-secondary px-[10px] py-[5px] rounded-lg text-[20px] font-light">Pricing</p>
        <div className="max-w-[1021px] w-full mt-5 flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-6xl leading-none font-semibold">
            Simple and <span className="text-destructive">Affordable</span> Pricing Plan
          </h2>
          <p className="w-full md:w-4/5 font-light mt-5 text-lg leading-[21.78px] md:text-[28px] md:leading-[33.89px]">
            Our flexible plans are designed to scale with your business. We have a plan for you.
          </p>
        </div>

        <Tabs defaultValue="account" className="mt-10">
          <TabsList className="grid w-[384px] mx-auto grid-cols-2">
            <TabsTrigger value="account">Monthly</TabsTrigger>
            <TabsTrigger value="password">Annual (save 20%)</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="md:flex gap-5 mt-5 space-y-5 md:space-y-0">
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
              borderColor="border-destructive"
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
              borderColor="border-destructive"
              onClick={() => handleCardClick("premium-monthly")}
              isSelected={selectedCard === "premium-monthly"}
            />
          </TabsContent>
          <TabsContent value="password" className="md:flex gap-5 mt-5 md:mt-0 space-y-5 md:space-y-0">
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
              borderColor="border-destructive"
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
              borderColor="border-destructive"
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

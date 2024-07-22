import { Check, X } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface PricingCardProperties {
  title: string;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  buttonText: string;
  borderColor: string;
  onClick: () => void;
  isSelected: boolean;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  borderColor,
  onClick,
  isSelected,
}: PricingCardProperties) => {
  return (
    <Card
      className={`w-full max-w-sm lg:w-96 ${isSelected ? borderColor : ""}`}
      onClick={onClick}
    >
      <CardHeader className="space-y-3">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardTitle className="text-4xl leading-none">
          {price} <span className="text-lg font-light">/{period}</span>
        </CardTitle>
        <CardDescription className="w-full text-sm leading-6 md:w-[247px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="my-5 space-y-4">
        {features.map((feature, index) => (
          <CardDescription
            key={index}
            className={`flex items-center gap-3 ${
              feature.included ? "text-accent-foreground" : "text-accent"
            }`}
          >
            {feature.included ? <Check /> : <X />} {feature.text}
          </CardDescription>
        ))}
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full bg-primary">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;

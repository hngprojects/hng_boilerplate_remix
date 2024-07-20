import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Check, X } from "lucide-react";

interface PricingCardProps {
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
}: PricingCardProps) => {
  return (
    <Card className={`max-w-[384px] w-full lg:w-[384px] ${isSelected ? borderColor : ""}`} onClick={onClick}>
      <CardHeader className="space-y-3">
        <CardTitle className="text-[25px]">{title}</CardTitle>
        <CardTitle className="text-[39px] leading-none">
          {price} <span className="text-[20px] font-light">/{period}</span>
        </CardTitle>
        <CardDescription className="w-[247px] text-[13px] leading-[23.4px]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 my-5">
        {features.map((feature, index) => (
          <CardDescription key={index} className={`flex items-center gap-3 ${feature.included ? 'text-accent-foreground' : 'text-accent'}`}>
            {feature.included ? <Check /> : <X />} {feature.text}
          </CardDescription>
        ))}
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full bg-destructive">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;

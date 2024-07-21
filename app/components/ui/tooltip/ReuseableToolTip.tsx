import React from "react";
import { cn } from "~/lib/utils/cn";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";
import { Arrow } from "@radix-ui/react-tooltip";

interface ReusableToolTipProps {
  triggerContent: React.ReactNode;
  head?: string;
  body: string;
  subtext?: string;
  colorVariant: "primary" | "secondary" | "neutral";
  arrowPosition: "top" | "bottom" | "left" | "right";
}

const ReusableToolTip: React.FC<ReusableToolTipProps> = ({
  triggerContent,
  head,
  body,
  subtext,
  colorVariant,
  arrowPosition,
}) => {
  const getTextColorClass = (variant: "primary" | "secondary" | "neutral") => {
    switch (variant) {
      case "primary":
        return "text-white";
      case "secondary":
        return "text-primary";
      case "neutral":
        return "text-black";
      default:
        return "";
    }
  };

  const textColorClass = getTextColorClass(colorVariant);

  // Define dynamic classes based on arrowPosition
  const sideClass = `data-[side=${arrowPosition}]`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{triggerContent}</TooltipTrigger>
        <TooltipContent
          className={cn(
            `relative bg-${colorVariant} z-50 max-w-[384px] overflow-hidden rounded-md border text-sm text-${colorVariant}-foreground shadow-md animate-in fade-in-0 zoom-in-95`,
            sideClass
          )}
          side={arrowPosition}
        >
          <div className={cn(`${textColorClass} flex flex-col gap-3`)}>
            {head && <h3 className="text-sm font-semibold">{head}</h3>}
            <p className="text-sm font-medium">{body}</p>
            {subtext && <small className="text-xs">{subtext}</small>}
          </div>
          <Arrow
            width={20} // Set the width of the arrow
            height={12} // Set the height of the arrow
            className={cn("fill-current")} // Ensure the arrow uses the current color
          />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ReusableToolTip;

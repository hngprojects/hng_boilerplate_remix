import { cn } from "~/lib/utils/cn";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...properties
}) => (
  <div
    className={cn(
      "border-1 rounded-lg border border-[#ffffff] bg-white shadow",
      className,
    )}
    {...properties}
  />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...properties
}) => <div className={cn("", className)} {...properties} />;

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...properties
}) => <div className={cn("border", className)} {...properties} />;

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...properties
}) => <h2 className={cn("text-lg font-bold", className)} {...properties} />;

export const CardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, ...properties }) => (
  <p className={cn("text-sm text-gray-500", className)} {...properties} />
);

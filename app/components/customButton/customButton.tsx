import { Link } from "@remix-run/react";
import { LoaderCircle } from "lucide-react";
import React from "react";

type Variant =
  | "default"
  | "primary"
  | "destructive"
  | "subtle"
  | "loading"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

type Size = "default" | "sm" | "lg" | "link" | "icon" | "circle";

interface ButtonProperties {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  isLoading?: boolean;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isIconOnly?: boolean;
  isLeftIconVisible?: boolean;
  isRightIconVisible?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProperties> = ({
  leftIcon,
  rightIcon,
  isLoading,
  href,
  variant = "default",
  size = "default",
  icon,
  children,
  isLeftIconVisible = true,
  isRightIconVisible = true,
  isDisabled,
  ariaLabel,
  onClick,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-[16px] py-[8px] gap-[8px] text-[14px] font-medium rounded-md";
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    primary: "bg-primary text-[#FFFFFF] hover:bg-[#F97316]",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    subtle: "bg-[#F1F5F9] hover:bg-[#E2E8F0]",
    loading: "bg-[#0F172A] text-[#FFFFFF]",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    link: "h-auto px-0",
    icon: "h-10 w-10 !px-0",
    circle: "h-[40px] w-[40px] !rounded-full !px-0",
  };
  const loadingClasses = "opacity-75 cursor-not-allowed";
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${isLoading ? loadingClasses : ""}`;

  const content = (
    <>
      {isLoading && <LoaderCircle />}
      {isLeftIconVisible && leftIcon && !isLoading && (
        <span className="">{leftIcon}</span>
      )}
      {children || icon}
      {isRightIconVisible && rightIcon && (
        <span className="text-primary">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className={buttonClasses}
        aria-busy={isLoading}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isLoading || isDisabled}
      aria-busy={isLoading}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;

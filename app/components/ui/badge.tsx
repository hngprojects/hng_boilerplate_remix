import React from "react";
import classNames from "classnames";

interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
  variant: "default" | "primary" | "success" | "error";
}

const Badge: React.FC<BadgeProps> = ({ label, icon, variant }) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";

  const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-orange-200 text-orange-800",
    success: "bg-green-200 text-green-800",
    error: "bg-red-200 text-red-800",
  };

  return (
    <span
      className={classNames(baseStyles, variantStyles[variant])}
      role="status"
      aria-label={label}
    >
      {icon && (
        <span className="mr-2" data-testid="badge-icon">
          {icon}
        </span>
      )}
      {label}
    </span>
  );
};

export default Badge;

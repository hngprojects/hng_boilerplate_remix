import classNames from "classnames";
import React from "react";

interface BadgeProperties {
  label: string;
  icon?: React.ReactNode;
  variant: "default" | "primary" | "success" | "error";
}

const Badge: React.FC<BadgeProperties> = ({ label, icon, variant }) => {
  const baseStyles = `inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`;

  const variantStyles: { [key: string]: string } = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
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

import { Link } from "@remix-run/react";
import React from "react";

interface BreadcrumbItemProperties {
  name: string;
  link: string;
  isCurrent: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProperties> = ({
  name,
  link,
  isCurrent,
}) => {
  const commonStyles = "text-[#222] font-roboto text-xs font-normal leading-4";
  const itemStyles = "flex items-center py-1";
  const marginRight = isCurrent ? "" : "mr-2";

  if (isCurrent) {
    return (
      <span
        className={`${commonStyles} text-[#6A6A6A] ${itemStyles} ${marginRight}`}
      >
        {name}
      </span>
    );
  }

  return (
    <Link
      to={link}
      className={`${commonStyles} hover:underline ${itemStyles} ${marginRight}`}
    >
      {name}
    </Link>
  );
};

export default BreadcrumbItem;

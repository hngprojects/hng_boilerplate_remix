import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbSeparator from "./BreadcrumbSeparator";

interface Page {
  name: string;
  link: string;
}

interface BreadcrumbProps {
  pages: Page[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pages }) => {
  return (
    <nav aria-label="breadcrumb" className="flex items-center">
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem
            name={page.name}
            link={page.link}
            isCurrent={index === pages.length - 1}
          />
          {index < pages.length - 1 && (
            <span className="flex items-center mx-2">
              <BreadcrumbSeparator />
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

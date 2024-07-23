import { ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./BreadCrumbs";

const JobDetailsBreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="mx-asuto flex w-5/6 place-items-start text-base sm:text-xl">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Career</BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-primary">
            Job Details
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default JobDetailsBreadCrumb;

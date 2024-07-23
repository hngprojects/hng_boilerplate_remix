import { ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./BreadCrumbs";

const PricingPaymentBreadCrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="mx-auto flex w-5/6 place-items-start text-sm">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Pricing</BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#" className="text-primary">
            Payment
          </BreadcrumbLink>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PricingPaymentBreadCrumb;

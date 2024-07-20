import React from "react";
import { useLocation } from "@remix-run/react";
import Breadcrumb from "./Breadcrumb";

const BreadcrumbProvider: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbPages = pathnames.map((pathname, index) => {
    const link = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      name: pathname.charAt(0).toUpperCase() + pathname.slice(1),
      link,
    };
  });
  breadcrumbPages.unshift({
    name: "Home",
    link: "/",
  });

  return <Breadcrumb pages={breadcrumbPages} />;
};

export default BreadcrumbProvider;

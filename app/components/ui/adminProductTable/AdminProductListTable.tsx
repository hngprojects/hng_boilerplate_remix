import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "app/components/ui/pagination";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/adminProductTable/table";
import { Button } from "../button";
import { Badge } from "./badge";

interface Product {
  name: string;
  price: string;
  totalSold: string;
  status: string;
  createdAt: string;
  action: JSX.Element;
}

const products: Product[] = [
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Active",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "AeroGlow Desk Lamp",
    price: "$129.99",
    totalSold: "25",
    status: "Active",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon2.svg" alt="option" />,
  },
];

const AdminProductListTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="">
      <section className="text-14 max-h-[447px] max-w-[1039px] flex-col gap-6">
        <header className="flex items-center justify-between gap-10 py-10 max-sm:flex-col">
          <div className="">
            <h2 className="font-inter text-[18px] font-semibold leading-[23.4px] text-black sm:text-[28px] sm:leading-[33.89px]">
              Products
            </h2>
            <p className="font-inter mt-2 text-[12px] font-normal leading-[14.52px] sm:mt-4">
              Manage your products and view their sales performance.
            </p>
          </div>

          <div className="flex gap-2">
            <Button className="gap-2 border bg-white text-[#525252] hover:bg-slate-100">
              <img src="/icons/filterIcon2.svg" alt="filter" />
              <p>Filter</p>
            </Button>
            <Button className="gap-2 bg-[#F97316] hover:bg-[#F97316]/80">
              <img src="/icons/addicon2.svg" alt="add" />
              <p>Add Product</p>
            </Button>
          </div>
        </header>
        <Table className="max-w-[1039px]">
          <TableHeader className="bg-[#FFF7F2]">
            <TableRow className="">
              <TableHead className="font-inter pr-5 text-base font-normal leading-5 text-black">
                Name
              </TableHead>
              <TableHead className="font-inter pr-5 text-base font-normal leading-5 text-black">
                Price
              </TableHead>
              <TableHead className="font-inter pr-5 text-base font-normal leading-5 text-black">
                Total Sold
              </TableHead>
              <TableHead className="font-inter pr-5 text-base font-normal leading-5 text-black">
                Status
              </TableHead>
              <TableHead className="font-inter pr-5 text-base font-normal leading-5 text-black max-md:hidden">
                Created At
              </TableHead>
              <TableHead className="font-inter pr-11 text-base font-normal leading-5 text-black max-md:hidden">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedProducts.map((product, index) => (
              <TableRow key={index} className="border-b">
                <TableCell className="flex items-center gap-2 font-medium">
                  <img
                    src="/icons/Rectangle2.png"
                    alt=""
                    className="h-[67px] w-[67px]"
                  />
                  <div className="bg-custom-gradient h-[40px] w-[40px] sm:h-[67px] sm:w-[67px]" />
                  <p className="font-inter text-sm leading-4">{product.name}</p>
                </TableCell>
                <TableCell className="font-inter text-sm font-medium leading-4">
                  {product.price}
                </TableCell>
                <TableCell>{product.totalSold}</TableCell>
                <TableCell className="">
                  <Badge
                    variant={"outline"}
                    className={`text-center font-medium ${
                      product.status === "Active"
                        ? "border-green-500 text-green-500"
                        : "border-primary text-primary"
                    }`}
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="">{product.createdAt}</TableCell>
                <TableCell className="">{product.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-4">
          {currentPage > 1 && (
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              size="default"
            />
          )}
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                  size="default" // Adding default size
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
          {currentPage < totalPages && (
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
              size="default"
            />
          )}
        </Pagination>
      </section>
    </div>
  );
};

export default AdminProductListTable;

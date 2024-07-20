import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const products = [
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon.svg" alt="option" />,
  },
  {
    name: "Hypernova Headphones",
    price: "$129.99",
    totalSold: "25",
    status: "Active",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon.svg" alt="option" />,
  },
  {
    name: "AeroGlow Desk Lamp",
    price: "$129.99",
    totalSold: "25",
    status: "Active",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon.svg" alt="option" />,
  },
  {
    name: "TechTonic Energy Drink",
    price: "$129.99",
    totalSold: "25",
    status: "Draft",
    createdAt: "2024-07-16 10:36AM",
    action: <img src="/icons/option-icon.svg" alt="option" />,
  },
];

const AdminProductListTable = () => {
  return (
    <section className="text-14 max-w-[1039px] max-h-[447px] flex-col gap-6">
      <header className="flex max-sm:flex-col gap-10  items-center py-10 justify-between">
        <div className="">
          <h2 className="font-inter sm:text-[28px] text-[18px] font-semibold leading-[23.4px] text-black sm:leading-[33.89px]">
            Products
          </h2>
          <p className="font-inter text-[12px] sm:mt-4 mt-2 font-normal leading-[14.52px] text-left">
            Manage your products and view their sales performance.
          </p>
        </div>

        <div className="flex gap-2">
          <Button className="bg-white hover:bg-slate-100 gap-2 border text-[#525252]">
            <img src="/icons/filterIcon.svg" alt="filter" />
            <p>Filter</p>
          </Button>
          <Button className="bg-[#F97316] gap-2 hover:bg-[#F97316]/80">
            <img src="/icons/addicon.svg" alt="add" />
            <p>Add Product</p>
          </Button>
        </div>
      </header>
      <Table>
        <TableHeader className="bg-[#FFF7F2] ">
          <TableRow className="">
            <TableHead className="px-2 text-base font-normal font-inter leading-5 text-left text-[#0A0A0A]">
              Name
            </TableHead>
            <TableHead className="px-2 text-base font-normal font-inter leading-5 text-left text-[#0A0A0A]">
              Price
            </TableHead>
            <TableHead className="px-2 text-base font-normal font-inter leading-5 text-left text-[#0A0A0A]">
              Total Sold
            </TableHead>
            <TableHead className="px-2 text-base font-normal font-inter leading-5 text-left text-[#0A0A0A]">
              Status
            </TableHead>
            <TableHead className="px-2 max-md:hidden text-base font-normal font-inter leading-5 text-left text-[#0A0A0A]">
              Created At
            </TableHead>
            <TableHead className="px-2 max-md:hidden text-base font-normal font-inter leading-5 text-left text-[#0A0A0A]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index} className="border-b">
              <TableCell className="font-medium flex items-center gap-2 justify-between">
                <div className="sm:w-[67px] w-[40px] h-[40px] sm:h-[67px] bg-custom-gradient" />
                <p className="text-sm font-inter leading-4">{product.name}</p>
              </TableCell>
              <TableCell
                className="text-sm font-medium font-inter leading-4 text-left
"
              >
                {product.price}
              </TableCell>
              <TableCell>{product.totalSold}</TableCell>
              <TableCell className="">
                <Badge
                  variant={"outline"}
                  className={` text-center font-medium ${
                    product.status === "Active"
                      ? "border-[#6DC347]  text-[#6DC347]"
                      : "border-[#525252] text-[#525252]"
                  }`}
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell className="max-md:hidden">
                {product.createdAt}
              </TableCell>
              <TableCell className=" max-md:hidden">{product.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
export default AdminProductListTable;

import { ColumnDef } from "@tanstack/react-table";
import {  DotIcon, EllipsisVertical } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

// interface for your data
export interface Payment {
  id: string;
  phone: string;
  status: "active" | "inactive";
  name: string;
  email: string;
  img: string;
  date: string;
}

// props interface for the columns
interface PaymentColumnsProps {
  client: string;
}

// column definitions
export const columns = ({
  client,
}: PaymentColumnsProps): ColumnDef<Payment>[] => [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const { name, email, img } = row.original;

      return (
        <div className="flex items-center lg:pr-0 pr-5">
          {img && (
            <img src={img} alt={name} className="w-8 h-8 rounded-full mr-2" />
          )}
          <div>
            <div>{name}</div>
            <div className="text-gray-500 md:text-sm text-xs">{email}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "date",
    header: "Date Created",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <>
          <div className="flex items-center pr-14">
            <DotIcon
              className={`text-center mr-2 h-12 w-12 ${
                payment.status === "active"
                  ? "text-[#6DC347]"
                  : "text-[#F97316]"
              }`}
            />
            <span className="font-medium text-sm">
              {payment.status === "active" ? "Active" : "Inactive"}
            </span>
          </div>
        </>
      );
    },
  },

  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const payment = row.original;

      const editData = () => {
        // Implement edit functionality here
        // Prompt user for new values and update payment data
      };

      const deleteData = () => {
        // Implement delete functionality here
        // Delete the payment entry
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="shadow-md border-[#E4E4E7]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={editData}>Update</DropdownMenuItem>
            <DropdownMenuItem onClick={deleteData}>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />
            {client === "premium" && (
              <>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

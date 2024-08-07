import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const data: Payment[] = [
  {
    id: "728ed52f",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oG6bIjXDj7SK7Oa0TfC4ERFx274A_puT8obuMz-k8MYeUIdkeemDybaytw&s",
    name: "Afolabi Olanipekun",
    email: "afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: "active",
  },
  {
    id: "728ed52f",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oG6bIjXDj7SK7Oa0TfC4ERFx274A_puT8obuMz-k8MYeUIdkeemDybaytw&s",
    name: "Adetunji Oluwaseun",
    email: "afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: "inactive",
  },
  {
    id: "728ed52f",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oG6bIjXDj7SK7Oa0TfC4ERFx274A_puT8obuMz-k8MYeUIdkeemDybaytw&s",
    name: "Ifunanya Adedapo",
    email: "afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: "inactive",
  },
  {
    id: "728ed52f",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oG6bIjXDj7SK7Oa0TfC4ERFx274A_puT8obuMz-k8MYeUIdkeemDybaytw&s",
    name: "Busola Igwe",
    email: "afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: "inactive",
  },
  {
    id: "728ed52f",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_oG6bIjXDj7SK7Oa0TfC4ERFx274A_puT8obuMz-k8MYeUIdkeemDybaytw&s",
    name: "Moshood Adedayo",
    email: "afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: "active",
  },
];
export default function UsersTable({ client = "" }) {
  return (
    <div>
      <DataTable columns={columns({ client })} data={data} />
    </div>
  );
}

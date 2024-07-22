import type { MetaFunction } from "@remix-run/node";
import UsersCard from "~/components/SuperAdminUsersPage/Users/card";
import UserSideBar from "~/components/SuperAdminUsersPage/Users/side-bar";
import UsersTable from "~/components/SuperAdminUsersPage/Users/Table";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function User() {
  return (
    <div className="font-sans pb-4 lg:px-10 md:px-0">
      <div className="pl-3 ">
        <UserSideBar />
        <div className=" pb-4 sm:ml-56">
          <div className="">
            <UsersCard />
            <UsersTable />
          </div>
        </div>
      </div>
    </div>
  );
}

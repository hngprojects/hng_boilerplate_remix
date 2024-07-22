import PasswordUpdate from "~/components/dashboard/PasswordUpdate";
import { AdminSideNavBar } from "~/components/SuperAdminSideBar/SuperAdminSideNavBar";
import Header from "~/components/ui/header";

const DaashboardPasswordSettings = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <AdminSideNavBar />
        <PasswordUpdate />
      </div>
    </>
  );
};

export default DaashboardPasswordSettings;

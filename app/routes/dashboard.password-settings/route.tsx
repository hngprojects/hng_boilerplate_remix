import PasswordUpdate from "~/components/dashboard/PasswordUpdate";
import { AdminSideNavBar } from "~/components/SuperAdminSideBar/SuperAdminSideNavBar";

const DaashboardPasswordSettings = () => {
  return (
    <>
      <div className="flex">
        <AdminSideNavBar />
        <PasswordUpdate />
      </div>
    </>
  );
};

export default DaashboardPasswordSettings;

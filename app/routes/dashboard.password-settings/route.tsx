import PasswordUpdate from "~/Components/dashboard/PasswordUpdate";


const DaashboardPasswordSettings = () => {
  return (
    <>
      <div className="grid h-16 place-items-center font-extrabold">Nav</div>
      <div className="flex">
        <div className="grid h-svh w-[20%] place-items-center bg-[rgba(203,213,225,.3)] font-extrabold max-lg:hidden">
          Sidebar
        </div>
        <PasswordUpdate />
      </div>
    </>
  );
};

export default DaashboardPasswordSettings;

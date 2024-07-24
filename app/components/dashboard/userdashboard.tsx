// import { avatar, date, drop, logo, menu, notification, question, search } from "..";
import avatar from "/images/avatar.png";
import drop from "/images/drop.png";
import logo from "/images/logo.png";
import question from "/images/question.png";
import search from "/images/search.png";
import menu from "/images/spec/Menu.png";
import notification from "/images/spec/Notification.png";
import { useEffect, useState } from "react";

import Dashboard from "../userdashboard/Dashboard";

export default function UserDashboardPage() {
  return (
    <section className="flex h-screen w-full flex-col items-center">
      <Navbar />
      <Dashboard />
    </section>
  );
}

function Navbar() {
  const [state, setstate] = useState({
    switch: false,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <nav className="flex w-full flex-row items-center justify-between px-[10px] py-[6px] sm:px-[40px] sm:py-[16px]">
        <div className="flex flex-row items-center gap-[50px] sm:w-[46%]">
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <img
              onClick={() =>
                setstate((previous) => ({ ...previous, switch: !state.switch }))
              }
              src={menu}
              className="h-[24px] w-[24px] object-cover"
            />
            <img src={logo} className="h-[18px] w-[18px] object-cover" />
            <p className="font-sans text-2xl font-semibold">Boilerplate.</p>
          </div>
          <ul className="hidden flex-col items-center gap-[22px] sm:flex sm:flex-row">
            <li className="font-sans text-[12px] font-medium text-[#F97316]">
              Overviews
            </li>
            <li className="font-sans text-[12px] font-medium">Customers</li>
            <li className="font-sans text-[12px] font-medium">Products</li>
          </ul>
        </div>
        <div className="mx-0 flex w-1/4 flex-row items-center justify-end gap-[20px] self-center sm:w-[40%]">
          <div className="hidden min-w-[60%] flex-row items-center gap-[12px] rounded-md border border-[#E4E4E7] px-[12px] sm:flex">
            <img
              src={search}
              className="h-[11.73px] w-[11.73px] object-cover"
              alt="search_img"
            />
            <input
              placeholder="Search options..."
              type="text"
              className="w-[90%] py-[8px] font-sans text-sm font-medium text-[#525252] outline-none placeholder:text-[#525252]"
            />
          </div>
          <div className="relative hidden justify-end text-end sm:flex">
            <img
              src={notification}
              title="notification"
              className="h-[20px] min-w-[19px] object-cover"
            />
            <div className="absolute right-1 top-0 h-[5px] w-[5px] rounded-full bg-red-600"></div>
          </div>
          <img
            src={search}
            className="flex h-[20px] w-[20px] justify-end object-cover sm:hidden"
            alt="search_img"
          />
          <div className="flex justify-end">
            <img
              src={question}
              title={"help"}
              className="hidden w-[65%] object-cover sm:flex"
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-[5px] self-center">
            <img
              src={avatar}
              className="min-h-[38px] min-w-[38px] object-cover sm:w-[55%]"
            />
            <img src={drop} className="w-[28%] object-cover sm:w-[14%]" />
          </div>
        </div>
      </nav>
      <Sidebar on={state.switch} />
    </>
  );
}

function Sidebar({ on }: { on: boolean }) {
  return (
    <aside
      className={`absolute top-0 z-50 flex h-screen w-full flex-row items-start duration-1000 ${on ? "left-0" : "-left-full"}`}
    >
      <div className="flex h-full w-[85%] flex-col items-start bg-[#E4E4E7]">
        <div className="flex w-full flex-row items-center justify-between p-8">
          <div className="flex flex-row items-center gap-3">
            <img src={logo} className="h-[18px] w-[18px] object-cover" />
            <p className="font-sans text-2xl font-semibold">Boilerplate.</p>
          </div>
          <p className="text-black">&#xEB98;</p>
        </div>
        <div className="mt-10 flex w-full flex-col items-start gap-6 p-5">
          <p className="font-sans text-xl font-medium text-[#F97316]">
            Overviews
          </p>
          <p className="font-sans text-xl font-medium">Customers</p>
          <p className="font-sans text-xl font-medium">Products</p>
        </div>
        <div className="h-[1px] w-full bg-[#c5c5c5]"></div>
        <div className="mt-10 flex w-full flex-col items-center gap-7 p-5">
          <div className="flex w-full flex-row items-start justify-start gap-4">
            <img
              src={question}
              className="flex w-[6%] self-center object-cover"
            />
            <p className="self-center font-sans text-xl font-medium">Help</p>
          </div>
          <div className="flex w-full flex-row items-start justify-start gap-4">
            <img
              src={notification}
              className="flex w-[6%] self-center object-cover"
            />
            <p className="self-center font-sans text-xl font-medium">
              Notification
            </p>
          </div>
        </div>
      </div>
      <div className="h-full w-[15%] bg-black bg-opacity-25"></div>
    </aside>
  );
}

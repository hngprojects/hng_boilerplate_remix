import React from "react";
import {
  AlignJustify,
  BookTextIcon,
  CircleUserRound,
  HomeIcon,
  ListCollapseIcon,
  MailIcon,
  Package,
  Settings,
  SlidersHorizontalIcon,
  Users,
} from "lucide-react";

const UserSideBar: React.FC = () => {
  return (
    <div>
      <button
        id="Sidebar"
        data-dropdown-toggle="separator-sidebar"
        className="inline-flex items-center p-2 text-sm mb-2  font-medium text-center text-gray-600 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none border "
        type="button"
      >
        <div className="w-5 h-5 " aria-hidden="true">
          <AlignJustify />
        </div>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 lg:w-64 md:w-[220px] h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-xl dark:bg-gray-300">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <HomeIcon className=" w-4" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <Package className=" w-4" />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <Users className=" w-4" />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <MailIcon className=" w-4" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Email Templates
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <ListCollapseIcon className=" w-4" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Squeeze Pages
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <BookTextIcon className=" w-4" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Waitlist Page
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 group text-sm"
              >
                <Settings className=" w-4" />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 dark:text-white group text-sm"
              >
                <span className="ms-3 ">Organization</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 dark:text-white group text-sm"
              >
                <CircleUserRound className=" w-4" />
                <span className="ms-3">Members</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-[#F97316] hover:text-white dark:hover:bg-gray-700 dark:text-white group text-sm "
              >
                <SlidersHorizontalIcon className=" w-4" />
                <span className="ms-3">Integration</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default UserSideBar;

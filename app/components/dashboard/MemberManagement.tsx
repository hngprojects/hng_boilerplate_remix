import { Link } from "@remix-run/react";
import { ArrowRight, Check, ChevronDown, Search } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import UserList from "./UserList";

function MemberManagement() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [display, setDisplay] = useState<string>("none");

  // search
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // filter buttons
  const accountType_button: string[] = [
    "All",
    "Members",
    "Suspended",
    "Left workspace",
  ];
  // demo card design for users

  useEffect(() => {
    const handleClick = () => {
      setDisplay("none");
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDisplay(display === "none" ? "block" : "none");
  };

  const handleOptionClick = (button: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setFilter(button);
    setDisplay("none");
  };

  return (
    <div className="flex flex-col flex-wrap p-5">
      <p className="text-lg font-semibold">Manage members</p>

      {/* heading */}
      <div className="flex flex-wrap items-center text-sm">
        On the Free plan all members in a workspace are administrators. Upgrade
        to a paid plan to add the ability to assign or remove administrator
        roles.
        <Link
          className="mx-1 flex flex-row items-center text-[#eb7300]"
          to={"/"}
        >
          Go to Plans
          <span className="mx-2 fill-[#eb7300]">
            <ArrowRight width={"12px"} />
          </span>
        </Link>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center">
        <div className="flex basis-1/2 flex-row">
          <form
            className="flex w-72 flex-row items-center rounded-lg border-[1.5px] border-[#cdd5e1] px-2"
            action=""
          >
            <span>
              <Search width={"22px"} stroke="#525252" />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              onChange={handleSearch}
              placeholder="Search by name or email"
              className="basis-full border-none p-2 text-sm placeholder-[#525252] outline-none"
            />
          </form>

          <div className="relative flex">
            <button
              onClick={toggleDropdown}
              className="mx-2 flex cursor-pointer flex-row items-center overflow-hidden rounded-lg border-[1.5px] border-[#cdd5e1] px-3 py-2"
            >
              {filter}
              <ChevronDown
                width={"20px"}
                className="ml-2 inline-block stroke-[#525252]"
              />
            </button>

            <div
              className={`absolute ${
                display === "block" ? "flex" : "hidden"
              } left-2 top-0 w-64 flex-col flex-wrap items-start rounded-sm bg-white p-2 font-semibold text-[#525252] shadow-[2px_1px_10px_2px_rgba(0,0,0,0.1)]`}
              onClick={(event) => event.stopPropagation()}
            >
              {accountType_button.map((button, index) => (
                <button
                  key={index}
                  onClick={(event) => handleOptionClick(button, event)}
                  className={`${
                    filter === button ? "bg-[#cdd5e1]" : ""
                  } mt-[1px] flex w-full cursor-pointer flex-row justify-between rounded px-2 py-1 transition delay-100 ease-in-out hover:bg-[#cdd5e1]`}
                >
                  {button}
                  {filter === button && (
                    <Check className="mr-end inline-block" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex basis-1/2 flex-row items-center justify-end">
          <button className="rounded-sm bg-[#eb7300] px-3 py-2 text-white">
            Invite people
          </button>
        </div>
      </div>

      <UserList search={search} filter={filter} />
    </div>
  );
}

export default MemberManagement;

import { Link } from "@remix-run/react";
import { ArrowRight, Check, ChevronDown, Search, X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

import DeleteMemberModal from "../ui/DeleteMemberModal";

function MemberManagement() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [display, setDisplay] = useState<string>("none");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string>("");

  // handle member delete modal
  const handleMemberDelete = (userName: string): void => {
    setSelectedUserName(userName);
    setIsModalVisible(true);
  };

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

  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
    isUser: boolean;
    isGuest: boolean;
    role: string;
  }

  // demo user data
  const users: User[] = [
    {
      id: 1,
      name: "john doe",
      email: "johndoe@gmail.test",
      isAdmin: true,
      isUser: false,
      isGuest: false,
      role: "members",
    },
    {
      id: 2,
      name: "tester",
      email: "johndoe@gmail.test",
      isAdmin: false,
      isUser: true,
      isGuest: false,
      role: "suspended",
    },
    {
      id: 3,
      name: "rest2",
      email: "rohndoe@gmail.test",
      isAdmin: false,
      isUser: true,
      isGuest: false,
      role: "left workspace",
    },
  ];

  // demo card design for users
  const userList = () => {
    return (
      <>
        <p>{users.length} active members</p>
        {users
          .filter(
            (user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase()) ||
              user.role.toLowerCase() === filter.toLowerCase(),
          )
          .map((user, index) => (
            <div
              className="mt-2 flex flex-row flex-wrap items-center"
              key={index}
            >
              <div className="flex basis-2/3 flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="min:w-32 min:h-32 rounded-full border bg-gray-500 p-10"></div>
                  <div className="mx-2 flex flex-col">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                </div>
                <p className="flex flex-row items-center">
                  {user.isAdmin ? "Admin" : user.isGuest ? "Guest" : "Users"}
                  <ChevronDown />
                </p>
              </div>

              <div className="relative flex basis-1/3 flex-row justify-end">
                <button onClick={() => handleMemberDelete(user.name)}>
                  <X />
                </button>

                {isModalVisible && selectedUserName === user.name && (
                  <div className="absolute">
                    <DeleteMemberModal memberName={selectedUserName} />
                  </div>
                )}
              </div>
            </div>
          ))}
      </>
    );
  };

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

      {userList()}
    </div>
  );
}

export default MemberManagement;

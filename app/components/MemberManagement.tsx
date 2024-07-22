import { Link } from "@remix-run/react";
import { Angle_down, Arrow_right } from "~/components/ui/svgs";
import { useState, ChangeEvent } from "react";
import { Search, Check } from "lucide-react";

function MemberManagement() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [display, setDisplay] = useState<string>("none");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //   account type btn
  const accountType_btn: string[] = [
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
  }

  const users: User[] = [
    {
      id: 1,
      name: "john doe",
      email: "johndoe@gmail.test",
      isAdmin: true,
      isUser: false,
      isGuest: false,
    },
    {
      id: 2,
      name: "tester",
      email: "johndoe@gmail.test",
      isAdmin: false,
      isUser: true,
      isGuest: false,
    },
    {
      id: 3,
      name: "rest2",
      email: "rohndoe@gmail.test",
      isAdmin: false,
      isUser: true,
      isGuest: false,
    },
  ];

  const userList = () => {
    return (
      <>
      <p>{users.length} active members</p>
        {users
          .filter(
            (user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <div key={user.id}>
              <p>
                {user.name}:{" "}
                {user.isAdmin ? "Admin" : user.isGuest ? "Guest" : "Users"}
              </p>
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="flex flex-col flex-wrap p-5">
      <p className="font-semibold text-lg">Manage members</p>

      {/* heading */}
      <div className="flex items-center flex-wrap text-sm">
        On the Free plan all members in a workspace are administrators. Upgrade
        to a paid plan to add the ability to assign or remove administrator
        roles.
        <Link
          className="text-[#eb7300] flex flex-row items-center mx-1"
          to={"/"}
        >
          Go to Plans
          <span className="mx-2 fill-[#eb7300]">
            <Arrow_right width={"12px"} />
          </span>
        </Link>
      </div>

      {/* search bar and invite button */}
      <div className="flex flex-row flex-wrap mt-5 items-center">
        <div className="flex flex-row basis-1/2">
          <form
            className="w-72 border-[1.5px] rounded-lg border-[#cdd5e1] px-2 flex flex-row items-center"
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
              className="text-sm p-2 placeholder-[#525252] outline-none border-none basis-full"
            />
          </form>
          {/* drop down */}
          <div className="flex relative">
            {/* activate drop_down */}
            <button
              onClick={() => setDisplay("account_type")}
              className="flex flex-row items-center justify-center border-[1.5px] rounded-lg border-[#cdd5e1] px-2 mx-2 overflow-hidden"
            >
              {filter}
              <span className="ml-2 stroke-[#525252] stroke-[.2px]">
                <Angle_down width={"20px"} />
              </span>
            </button>

            {/* drop down content */}
            <div
              className={`absolute ${
                display == "account_type" ? "flex" : "hidden"
              } flex-col items-start bg-white top-0 left-2 shadow-[2px_1px_10px_2px_rgba(0,0,0,0.1)] p-2 w-64 rounded-sm text-[#525252] font-semibold flex-wrap`}
            >
              {accountType_btn.map((btn) => (
                <button
                  className={`${
                    filter == btn && "bg-[#cdd5e1]"
                  } px-2 py-1 hover:bg-[#cdd5e1] w-full flex justify-between rounded transition ease-in-out delay-100`}
                  onClick={() => {
                    setFilter(btn), setDisplay("none");
                  }}
                >
                  {btn}
                  {filter == btn && <Check />}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row basis-1/2 items-center justify-end">
          <button className="bg-[#eb7300] text-white rounded-sm py-2 px-3">
            Invite people
          </button>
        </div>
      </div>


      {userList()}
    </div>
  );
}

export default MemberManagement;

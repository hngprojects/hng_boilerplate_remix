import { Link } from "@remix-run/react";
import { Arrow } from "~/components/ui/arrow";
import React, { useState, ChangeEvent } from "react";

function About() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search)
  };

  return (
    <div>
      <p className="font-semibold text-lg">Manage members</p>

      {/* heading */}
      <div className="flex items-center text-sm">
        On the Free plan all members in a workspace are administrators. Upgrade
        to a paid plan to add the ability to assign or remove administrator
        roles.
        <Link
          className="text-[#eb7300] flex flex-row items-center mx-1"
          to={"/"}
        >
          Go to Plans
          <span className="mx-2 fill-[#eb7300]">
            <Arrow />
          </span>
        </Link>
      </div>

      {/* search bar and invite button */}
      <div className="flex flex-row flex-wrap">
        <input
          type="text"
          name="search"
          id="search"
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default About;

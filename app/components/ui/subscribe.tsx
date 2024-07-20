import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="hidden md:flex items-center gap-  py-3 px-2 border-2 border-gray-300 rounded-xl">
      <input
        type="text"
        className="h-[22px] bg-transparent text-lg leading-5 font-normal outline-none"
        id="email"
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <button className="px-4 py-3 text-center bg-orange-500 rounded-xl">
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;

/* eslint-disable prettier/prettier */
import { useState } from "react";
import {mockPlatforms } from '~/data/admin'

import { cn } from "~/lib/utils/cn";




export default function IntegrationsComponent() {
  const [platforms, setPlatforms] = useState(mockPlatforms);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const togglePlatformActive = (id: number) => {
    setPlatforms(
      platforms.map((platform) =>
        platform.id === id
          ? { ...platform, isActive: !platform.isActive }
          : platform,
      ),
    );
  };

  const filteredPlatforms = platforms.filter((platform) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && platform.isActive) ||
      (filter === "inactive" && !platform.isActive);

    const matchesSearch = platform.heading
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="overflow-hidden px-9">
      <h1 className="mb-4 text-3xl font-bold">Integration</h1>
      <p className="mb-6">
        Supercharge your workflow and handle repetitive tasks with apps you use
        every day
      </p>

      <div className="mb-6 space-y-6 flex flex-wrap justify-between">
        <div className="space-x-2">
          <button
            className={cn(
              "rounded px-4 py-2",
              filter === "all" ? "bg-gray-200 text-black" : "bg-white",
            )}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={cn(
              "rounded px-4 py-2",
              filter === "active" ? "bg-gray-200 text-black" : "bg-white",
            )}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={cn(
              "rounded px-4 py-2",
              filter === "inactive" ? "bg-gray-200 text-black" : "bg-white",
            )}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded border px-4 py-2 md:w-20"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div className="grid grid-flow-row items-center justify-center gap-4 xl:grid-cols-3 xl:gap-7">
        {filteredPlatforms.map((platform) => (
          <div key={platform.id}>
            <div
              className={cn(
                "w-full rounded-[6px] border-[1px] border-[#CBD5E1] bg-white px-[16px] py-[24px]",
                "max-w-[24em]",
              )}
            >
              <header className="mb-[24px] flex items-center justify-between">
                <figure>
                  <img
                    src={platform.logo}
                    alt={platform.heading}
                    className="h-[32px] w-[32px]"
                  />
                </figure>
                <button
                  onClick={() => togglePlatformActive(platform.id)}
                  className={cn(
                    "h-[22px] w-[46px] rounded-full px-[2px]",
                    platform.isActive ? "bg-[#F97316]" : "bg-[#D0D6D6]",
                  )}
                >
                  <div
                    className={cn(
                      "h-[18px] w-[18px] rounded-full transition duration-300",
                      platform.isActive
                        ? "translate-x-[24px] bg-white"
                        : "translate-x-0 bg-[#F9F9F9]",
                    )}
                  />
                </button>
              </header>
              <div>
                <h2 className="mb-[6px] text-[16px] font-semibold text-[#0A0A0A]">
                  {platform.heading}
                </h2>
                <p className="text-[12px] text-[#0A0A0A]">
                  {platform.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

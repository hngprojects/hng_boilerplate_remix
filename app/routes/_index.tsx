import type { MetaFunction } from "@remix-run/node";

import { Button } from "~/components/ui/button";
import CardPlatform from "~/components/ui/card/card-platform";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { Input } from "~/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function SuperAdminNavBar() {
  return (
    <div className="font-sans p-4">
      <nav className="py-[13.5px] w-full bg-[#FDFDFD]  border-b border-b-[#DCDCDC] flex items-center justify-between max-w-[1142px] px-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search option..."
            className="w-full pr-10 pl-8 py-2 border rounded"
          />
          <img
            src="/images/magnifying-glass.png"
            alt="search"
            className="absolute top-[12px] left-[14px] w-[11.73px]"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative bg-inherit">
            <Button className=" px-0 bg-inherit relative">
              <img
                src="/images/notification-icon.png"
                alt="notification-icon"
                className="md:w-6 md:h-6 w-5 h-5 hidden md:block"
              />
              <div className="w-[6px] h-[6px] left-[13px] bg-[#F81404] absolute top-[8px] rounded-[50%] hidden md:block"></div>
            </Button>
          </div>

          {/* Question dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent px-0 ">
                <img
                  src="/images/question-icon.png"
                  alt="question-icon"
                  className="md:w-6 md:h-6 w-5 h-5 hidden md:block"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:w-32 mt-3 w-20">
              <DropdownMenuItem>Customer care</DropdownMenuItem>
              <DropdownMenuItem>FAQ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* profile dropdown */}
          <div className="flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent px-0 ">
                  <Avatar>
                    <AvatarImage src="/images/avatar.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-20 md:w-32 mt-3">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <img
              src="/images/dropdown-icon.png"
              alt="dropdown-icon"
              className="w-2 md:w-3"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

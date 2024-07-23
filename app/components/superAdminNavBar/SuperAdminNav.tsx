import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";

export default function SuperAdminNavBar() {
  return (
    <div className="p-4 font-sans">
      <nav className="flex w-full max-w-[1142px] items-center justify-between border-b border-b-[#DCDCDC] bg-[#FDFDFD] px-4 py-[13.5px]">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search option..."
            className="w-full rounded border py-2 pl-8 pr-10"
          />
          <img
            src="/images/magnifying-glass.png"
            alt="search"
            className="absolute left-[14px] top-[12px] w-[11.73px]"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative bg-inherit">
            <Button className="relative bg-inherit px-0">
              <img
                src="/images/notification-icon.png"
                alt="notification-icon"
                className="hidden h-5 w-5 md:block md:h-6 md:w-6"
              />
              <div className="absolute left-[13px] top-[8px] hidden h-[6px] w-[6px] rounded-[50%] bg-[#F81404] md:block"></div>
            </Button>
          </div>

          {/* Question dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent px-0">
                <img
                  src="/images/question-icon.png"
                  alt="question-icon"
                  className="hidden h-5 w-5 md:block md:h-6 md:w-6"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-3 w-20 md:w-32">
              <DropdownMenuItem>Customer care</DropdownMenuItem>
              <DropdownMenuItem>FAQ</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* profile dropdown */}
          <div className="flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent px-0">
                  <Avatar>
                    <AvatarImage src="/images/avatar.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-3 w-20 md:w-32">
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

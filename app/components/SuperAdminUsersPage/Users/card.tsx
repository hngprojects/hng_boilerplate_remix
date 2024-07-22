import { MoveUpRight, Package, User } from "lucide-react";

export default function UsersCard() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3 lg:gap-4 md:gap-2 lg:px-0 md:px-2">
        <div className="rounded-xl bg-white px-6 md:px-4 py-10 shadow-md border">
          <div className="flex justify-between">
            <h6 className="text-sm font-semibold">Total Users</h6>

            <User className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-[20px] font-bold text-neutral-800">4,000</h4>
            <div className="flex items-center ">
              <span className="text-xs text-muted-foreground">
                +10% from last month
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white px-6 py-8 md:px-4 shadow-md border">
          <div className="flex justify-between">
            <h6 className="text-sm font-semibold">Active Users</h6>

            <Package className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-[20px] font-bold text-neutral-800">1500</h4>
            <div className="flex items-center ">
              <span className="text-xs text-muted-foreground">
                +20% from last month
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white px-6 py-10 md:px-4 shadow-md border">
          <div className="flex justify-between">
            <h6 className="text-sm font-semibold">Deleted Users</h6>

            <MoveUpRight className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-[20px] font-bold text-neutral-800">4,000</h4>
            <div className="flex items-center ">
              <span className="text-xs text-muted-foreground">
                +150% from last month
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

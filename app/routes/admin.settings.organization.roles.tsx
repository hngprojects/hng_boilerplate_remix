import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "~/components/ui/button";
import CreateRoleModal from "~/components/ui/create-role-modal";
import { Switch } from "~/components/ui/switch";

type role = {
  id: number;
  name: string;
  description: string;
};

export default function Index() {
  const [active, setActive] = useState<string>("Administrator");
  const [createRoleModal, setCreateRoleModal] = useState<boolean>(false);
  const reference = useRef<HTMLDivElement>(null);

  const roles: role[] = [
    { id: 0, name: "Guest", description: "Read-only access" },
    { id: 1, name: "User", description: "Read, write, update" },
    { id: 3, name: "Manager", description: "Read, write, approve" },
    { id: 4, name: "Project lead", description: "Manage, coordinate, oversee" },
    { id: 5, name: "Administrator", description: "Full access, control" },
  ];

  const handleCreateRoleModal = () => {
    setCreateRoleModal(false);
  };

  useEffect(() => {
    // OnClick outside event for create roles modal
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        reference.current &&
        !reference.current.contains(event.target as Node)
      ) {
        setCreateRoleModal(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [setCreateRoleModal]);

  return (
    <div className="flex">
      <div className="flex flex-1 flex-wrap items-start gap-6 px-[3%] py-[5%]">
        <div className="flex w-full flex-col gap-6 md:w-[250px]">
          <h1 className="mb-8 text-xl font-bold">Roles</h1>
          {roles.map((role: role) => (
            <button
              key={role.id}
              className={`flex flex-col gap-1 rounded-[4px] p-[6px_14px] ${active === role.name ? "bg-[#F97316] text-[#FAFAFA]" : "hover:bg-[#F97316] hover:text-[#FAFAFA]"} `}
              onClick={() => setActive(role.name)}
            >
              <span className="font-medium leading-[24px]">{role.name}</span>
              <span className="text-sm">{role.description}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 border border-transparent md:border-l-[#CBD5E1] md:pl-6">
          <div className="mb-8 flex justify-end">
            <Button
              variant={"default"}
              className="flex items-center gap-2 bg-[#F97316] text-white"
              onClick={() => setCreateRoleModal(true)}
            >
              <Plus color="white" size={20} /> Create roles
            </Button>

            <div
              className={`absolute left-0 top-0 h-full w-full items-center justify-center bg-black/[0.3] backdrop-blur-sm ${createRoleModal ? "flex" : "hidden"}`}
            >
              <div ref={reference}>
                <CreateRoleModal
                  className=""
                  onClose={() => handleCreateRoleModal()}
                />
              </div>
            </div>
          </div>
          <div className="border border-transparent border-b-[#CBD5E1] pb-4">
            <h1 className="mb-2 text-xl font-semibold">Permissions</h1>
            <p className="text-sm">See the list of permissions</p>
          </div>

          <div className="mt-6">
            <h2 className="mb-4 text-lg font-medium">
              Transactions permissions
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p>Can view transactions</p>
                <Switch className="bg-[#F97316]" defaultChecked={true} />
              </div>
              <div className="flex justify-between">
                <p>Can view refunds</p>
                <Switch defaultChecked={true} />
              </div>
              <div className="flex justify-between">
                <p>Can log refunds</p>
                <Switch />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="mb-4 text-lg font-medium">User permissions</h2>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p>Can view users</p>
                <Switch />
              </div>
              <div className="flex justify-between">
                <p>Can create users</p>
                <Switch />
              </div>
              <div className="flex justify-between">
                <p>Can edit users</p>
                <Switch />
              </div>
              <div className="flex justify-between">
                <p>Can blacklist/whitelist users</p>
                <Switch />
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-end">
            <Button variant={"outline"} className="bg-[#F1F5F9]">
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

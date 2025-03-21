import { ChevronDown, Ellipsis } from "lucide-react";
import { useState } from "react";

import DeleteMemberModal from "../ui/DeleteMemberModal";
import { users } from "./users";

interface Properties {
  search: string;
  filter: string;
}

const UserList: React.FC<Properties> = ({ search, filter }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string>("");
  // handle member delete modal
  const handleMemberDelete = (userName: string): void => {
    setSelectedUserName(userName);
    setIsModalVisible(true);
  };
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
                <Ellipsis />
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

export default UserList;

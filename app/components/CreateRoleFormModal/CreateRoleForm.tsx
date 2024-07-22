import { Form } from "@remix-run/react";
import { FC, useState } from "react";

import CreateRoleModal from "./CreateRoleModal";

interface CreateRoleFormProperties {
  isOpen: boolean;
  onClose: () => void;
}

const CreateRoleForm: FC<CreateRoleFormProperties> = ({ isOpen, onClose }) => {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onClose();
  };

  return (
    <CreateRoleModal isOpen={isOpen}>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Create Role</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Define customized responsibilities for collaborative success.
        </p>
        <Form method="post" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="roleName"
              className="mb-1 block text-sm font-bold text-[#0A0A0A]"
            >
              Name of role
            </label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              placeholder="e.g: IT Staff"
              value={roleName}
              onChange={(event) => setRoleName(event.target.value)}
              className="w-[50%] rounded-md border border-border p-2 text-sm font-normal text-[#525252]"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="roleDescription"
              className="mb-1 block border-border text-sm font-bold text-[#0A0A0A] outline-border"
            >
              Role description
            </label>
            <textarea
              id="roleDescription"
              name="roleDescription"
              placeholder="Describe role"
              value={roleDescription}
              onChange={(event) => setRoleDescription(event.target.value)}
              className="h-24 w-full resize-none rounded-md border border-gray-300 p-2 text-sm font-normal text-[#525252]"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
            >
              Create Role
            </button>
          </div>
        </Form>
      </div>
    </CreateRoleModal>
  );
};

export default CreateRoleForm;

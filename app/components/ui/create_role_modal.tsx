import { FunctionComponent } from "react";
import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export type ModalsType = {
  className?: string;
  onClose?: () => void;
};

const CreateRoleModal: FunctionComponent<ModalsType> = ({ className = "", onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className={`max-w-[465px] min-h-[435px] shadow-lg rounded-md bg-zinc-50 m-auto flex flex-col py-6 px-6 ${className}`}
    >
      <div className="flex flex-row items-start justify-between mb-4">
        <div className="flex flex-col items-start">
          <h2
            id="modal-title"
            className="text-xl font-semibold text-gray-900"
          >
            Create Role
          </h2>
          <p className="text-sm text-gray-600">
            Define customized responsibilities for collaborative success.
          </p>
        </div>
        <div
          onClick={onClose}
          aria-label="Close"
          className="h-6 w-6 relative cursor-pointer overflow-hidden shrink-0 bg-transparent hover:bg-transparent"
        >
          <img
            className="h-full w-full"
            loading="lazy"
            alt="Close"
            src="/closeicon.png"
          />
        </div>
      </div>
      <Form
        action=""
        method="post"
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-start gap-2 ">
          <label
            htmlFor="roleName"
            className="font-semibold text-base text-gray-900"
          >
            Name of role
          </label>
          <input
            id="roleName"
            name="roleName"
            className="w-full h-10 px-3 py-2 bg-zinc-50 rounded-md border border-gray-300 text-sm text-gray-700"
            placeholder="e.g: IT Staff"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label
            htmlFor="roleDescription"
            className="font-semibold text-base text-gray-900"
          >
            Role description
          </label>
          <textarea
            id="roleDescription"
            name="roleDescription"
            className="w-full h-28 px-3 py-2 rounded-md border bg-zinc-50 border-gray-300 text-sm text-gray-700 resize-none"
            placeholder="Describe role"
            required
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <Button
            type="button"
            onClick={onClose}
            className="py-2 px-4 bg-[#F1F5F9] hover:bg-[#F1F5F9] text-gray-700 rounded-md"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Create Role
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateRoleModal;

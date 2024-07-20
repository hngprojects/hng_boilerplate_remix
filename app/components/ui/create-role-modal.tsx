import { Form } from "@remix-run/react";
import { FunctionComponent } from "react";
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
      className={`m-auto flex min-h-[435px] max-w-[465px] flex-col rounded-md bg-zinc-50 px-6 py-6 shadow-lg ${className}`}
    >
      <div className="mb-4 flex flex-row items-start justify-between">
        <div className="flex flex-col items-start">
          <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
            Create Role
          </h2>
          <p className="text-sm text-gray-600">
            Define customized responsibilities for collaborative success.
          </p>
        </div>
        <div
          onClick={onClose}
          aria-label="Close"
          className="relative h-6 w-6 cursor-pointer overflow-hidden"
        >
          <img className="h-full w-full" loading="lazy" alt="Close" src="/closeicon.png" />
        </div>
      </div>
      <Form action="" method="post" className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="roleName" className="text-base font-semibold text-gray-900">
            Name of role
          </label>
          <input
            id="roleName"
            name="roleName"
            className="h-10 w-full rounded-md border border-gray-300 bg-zinc-50 px-3 py-2 text-sm text-gray-700"
            placeholder="e.g: IT Staff"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="roleDescription" className="text-base font-semibold text-gray-900">
            Role description
          </label>
          <textarea
            id="roleDescription"
            name="roleDescription"
            className="h-28 w-full resize-none rounded-md border border-gray-300 bg-zinc-50 px-3 py-2 text-sm text-gray-700"
            placeholder="Describe role"
            required
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <Button
            type="button"
            onClick={onClose}
            className="rounded-md bg-[#F1F5F9] px-4 py-2 text-gray-700 hover:bg-[#F1F5F9]"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Create Role
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateRoleModal;
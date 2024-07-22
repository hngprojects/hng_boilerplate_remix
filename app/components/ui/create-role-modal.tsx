import { Form } from "@remix-run/react";
import { FunctionComponent } from "react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";

export type ModalsType = {
  className?: string;
  onClose?: () => void;
};

const CreateRoleModal: FunctionComponent<ModalsType> = ({
  className = "",
  onClose,
}) => {
  return (
    <Card
      className={`relative mx-auto my-4 max-w-lg bg-zinc-50 p-6 ${className}`}
    >
      <CardHeader className="relative flex items-start">
        <CardTitle className="!p-0">Create Role</CardTitle>
        <div
          onClick={onClose}
          className="absolute right-2 top-2 cursor-pointer"
          style={{ fontSize: "1.5rem" }}
        >
          <span aria-hidden="true">&times;</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-gray-600">
          Define customized responsibilities for collaborative success.
        </p>
        <Form action="" method="post" className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-2">
            <label
              htmlFor="roleName"
              className="text-base font-semibold text-gray-900"
            >
              Name of role
            </label>
            <Input
              id="roleName"
              name="roleName"
              className="h-10 w-full rounded-md border border-gray-300 bg-zinc-50 px-3 py-2 text-sm text-gray-700"
              placeholder="e.g: IT Staff"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label
              htmlFor="roleDescription"
              className="text-base font-semibold text-gray-900"
            >
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
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end gap-4 p-6">
        <Button
          type="button"
          onClick={onClose}
          className="rounded-md bg-[#F1F5F9] px-4 py-2 text-gray-700 hover:bg-[#F1F5F9]"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          form="form"
          className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          Create Role
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateRoleModal;

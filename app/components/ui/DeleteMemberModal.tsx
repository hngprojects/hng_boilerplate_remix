import React from "react";

import { Button } from "./button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

interface DeleteMemberModalProperties {
  memberName: string;
}

const DeleteMemberModal: React.FC<DeleteMemberModalProperties> = ({
  memberName,
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="rounded border px-4 py-2">
          Delete {memberName}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Member</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {memberName} ? All of your data
              will be permanently removed. This action cannot be undone.
            </DialogDescription>

            <div className="ml-auto flex w-fit gap-x-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive">Delete</Button>
              </DialogClose>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

// usage Example
/*
import DeleteMemberModal from "./components/ui/DeleteMemberModal";

const App = () => {

  return (
    <>
      <DeleteMemberModal memberName="Chad Bosewick"/>
    </>
  );
};

export default App;
*/

export default DeleteMemberModal;

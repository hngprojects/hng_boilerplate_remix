import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "./ui/dialog";
import { Button } from "./ui/button";

interface DeleteMemberModalProps {
  memberName: string;
}

const DeleteMemberModal: React.FC<DeleteMemberModalProps> = ({memberName,}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="border py-2 rounded px-4">Delete {memberName}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Member</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {memberName} ? All of your data
              will be permanently removed. This action cannot be undone.
            </DialogDescription>

            <div className="flex gap-x-2 ml-auto w-fit">
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
import DeleteMemberModal from "./components/DeleteMemberModal";
import { useState } from "react";

const App = () => {
  const [open, setIsOpen] = useState(true);

  return (
    <>
      <DeleteMemberModal setIsOpen={setIsOpen} memberName="Chad Bosewick" isOpen={open} />
      <button onClick={() => setIsOpen(true)}>Delete</button>
    </>
  );
};

export default App;
*/

export default DeleteMemberModal;

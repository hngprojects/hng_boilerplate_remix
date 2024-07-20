import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

interface DeleteMemberModalProperties {
  memberName: string;
}

const DeleteMemberModal: React.FC<DeleteMemberModalProperties> = ({
  memberName,
}) => {
  return (
    <>
      <AlertDialog>
        {/* <AlertDialogTrigger className="border py-2 rounded px-4">Delete {memberName}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Member</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {memberName} ? All of your data
              will be permanently removed. This action cannot be undone.
            </AlertDialogDescription>

            <div className="flex gap-x-2 ml-auto w-fit">
              <AlertDialogCancel asChild>
                <Button variant="outline">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogCancel asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
        </AlertDialogContent> */}
        <AlertDialogTrigger asChild>
          <Button variant="outline">Delete Member</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Member</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {memberName} ? All of your data
              will be permanently removed. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                className="bg-destructive text-destructive-foreground hover:bg-destructive"
                variant="destructive"
              >
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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

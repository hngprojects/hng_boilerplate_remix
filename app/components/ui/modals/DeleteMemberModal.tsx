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
} from "../alert-dialog";
import { Button } from "../button";

interface DeleteMemberModalProperties {
  memberName: string;
}

const DeleteMemberModal: React.FC<DeleteMemberModalProperties> = ({
  memberName,
}) => {
  return (
    <>
      <AlertDialog>
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

const App = () => {

  return (
    <>
      <DeleteMemberModal memberName="Chad Bosewick" />
    </>
  );
};

export default App;
*/

export default DeleteMemberModal;

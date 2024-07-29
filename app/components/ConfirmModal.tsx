import { useState } from "react";

import ConfirmationBox from "./Confirmation";

const handleClose = () => {
  console.log("Dialog closed");
};

// Function to handle cancelling the action
const handleCancel = (
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  console.log("Action cancelled");
  setIsOpen(false);
};

const handleConfirm = () => {
  console.log("Action confirmed");
};

export default function ConfirmModal() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div>
        <ConfirmationBox
          heading={"Head"}
          description={"This is the description of the whole box"}
          closeAction={handleClose}
          cancelAction={() => handleCancel(setIsOpen)}
          confirmAction={handleConfirm}
          cancelButtonLabel={"No, Thanks"}
          confirmButtonLabel={"Try Again"}
          variant={"confirmation"}
          isOpen={isOpen}
        />
      </div>
    )
  );
}

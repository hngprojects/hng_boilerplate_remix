import ConfirmationBox from "./Confirmation";
import { useState } from "react";

export default function ConfirmModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    console.log("Dialog closed");
  };

  // Function to handle cancelling the action
  const handleCancel = () => {
    console.log("Action cancelled");
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log("Action confirmed");
  };

  return (
    isOpen && (
      <div>
        <ConfirmationBox
          heading={"Head"}
          description={"This is the description of the whole box"}
          closeAction={handleClose}
          cancelAction={handleCancel}
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

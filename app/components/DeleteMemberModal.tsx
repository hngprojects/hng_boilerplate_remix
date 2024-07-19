import React from "react";

interface DeleteMemberModalProps {
  memberName: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteMemberModal: React.FC<DeleteMemberModalProps> = ({
  memberName,
  isOpen,
  setIsOpen,
}) => {
  if (!isOpen) return null;

  const closeModal = () => setIsOpen(false);

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  return (
    <div
      role="button"
      aria-label="Overlay"
      tabIndex={0}
      className="cursor-default fixed flex justify-center items-center w-full h-full bg-[#14141440] bg-opacity-[0.40] transition-opacity"
      onClick={closeModal}
      onKeyDown={handleKeyDown}
    >
      <div
        tabIndex={-1}
        aria-label="Modal"
        role="button"
        className="cursor-default  bg-[#FAFAFA] w-[90%] max-w-[512px] rounded-[6px] p-6"
        onClick={stopPropagation}
        onKeyDown={handleKeyDown}
      >
        <h1 className="font-semibold text-lg">Delete Member</h1>
        <div className="text-sm my-2 text-[#64748B]">
          Are you sure you want to delete {memberName} ? All of your data will be
          permanently removed. This action cannot be undone.
        </div>
        <div className="flex gap-x-2 ml-auto w-fit">
          <button
            className="text-sm py-2 px-4 border border-[#E2E8F0] bg-white rounded-[6px] font-medium text-[#0F172A]"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="text-sm py-2 px-4 bg-[#EF4444] rounded-[6px] font-medium text-white"
            onClick={closeModal}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
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

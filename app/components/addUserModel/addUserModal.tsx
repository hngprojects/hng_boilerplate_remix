import clsx from "clsx";
import { XIcon } from "lucide-react";

import { useModal } from "../../context/modalContext";
import { InputForm } from "../ui/formComponents/formComponent";
import { UploadPicture } from "../ui/formComponents/uploadPicture";

const AddUserModal = () => {
  const { isOpen, handleClose } = useModal();
  return (
    <>
      {isOpen && (
        <div
          className={clsx(
            "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
            { "animate-pop-in": isOpen, "animate-pop-out": !isOpen },
          )}
        >
          <div className="relative h-[514px] w-[422px] rounded border bg-white p-[43px] max-[530px]:w-[90%]">
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white"
              aria-label="Close"
            >
              <XIcon />
            </button>
            <h2 className="text-[18px] text-lg font-bold">Add new user</h2>
            <p className="mb-4 mt-0 text-[12px]">Create New User</p>
            <UploadPicture />
            <InputForm />
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default AddUserModal;

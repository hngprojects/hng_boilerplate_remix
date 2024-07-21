import { InputForm } from "../ui/formComponents/formComponent";
import { UploadPicture } from "../ui/formComponents/uploadPicture";

const AddUserModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-[514px] w-[422px] rounded bg-white p-[43px] shadow-lg">
        <h2 className="text-lg font-semibold">Add new user</h2>
        <p className="mb-4 mt-0 text-xs">Create New User</p>
        <UploadPicture />

        <InputForm />
      </div>
    </div>
  );
};

export default AddUserModal;

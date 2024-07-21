import { InputForm } from "../ui/formComponents/formComponent";
import { UploadPicture } from "../ui/formComponents/uploadPicture";

const AddUserModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="h-[514px] w-[422px] rounded border bg-white p-[43px] max-[530px]:w-[90%]">
        <h2 className="text-[18px] text-lg font-bold">Add new user</h2>
        <p className="mb-4 mt-0 text-[12px]">Create New User</p>
        <UploadPicture />
        <InputForm />
      </div>
    </div>
  );
};

export default AddUserModal;

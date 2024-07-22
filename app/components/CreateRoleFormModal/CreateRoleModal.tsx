import { FC, ReactNode } from "react";

interface CreateRoleModalProperties {
  isOpen: boolean;
  children: ReactNode;
}

const CreateRoleModal: FC<CreateRoleModalProperties> = ({
  isOpen,
  children,
}) => {
  if (!isOpen) return;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default CreateRoleModal;

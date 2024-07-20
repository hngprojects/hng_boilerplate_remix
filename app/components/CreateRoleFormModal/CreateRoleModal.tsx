import { FC, ReactNode } from 'react';

interface CreateRoleModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const CreateRoleModal: FC<CreateRoleModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
                {children}
            </div>
        </div>
    );
};

export default CreateRoleModal;
import { FC, useState } from 'react';
import { Form } from '@remix-run/react';
import CreateRoleModal from './CreateRoleModal';

interface CreateRoleFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateRoleForm: FC<CreateRoleFormProps> = ({ isOpen, onClose }) => {
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        onClose();
    };

    return (
        <CreateRoleModal isOpen={isOpen} onClose={onClose}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Create Role</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">Define customized responsibilities for collaborative success.</p>
                <Form method="post" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="roleName" className="block text-sm text-[#0A0A0A] font-bold mb-1">Name of role</label>
                        <input
                            type="text"
                            id="roleName"
                            name="roleName"
                            placeholder="e.g: IT Staff"
                            value={roleName}
                            onChange={(e) => setRoleName(e.target.value)}
                            className="w-[50%] p-2 border border-border text-[#525252] font-normal rounded-md text-sm"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="roleDescription" className="block text-sm text-[#0A0A0A]  font-bold outline-border border-border mb-1">Role description</label>
                        <textarea
                            id="roleDescription"
                            name="roleDescription"
                            placeholder="describe role"
                            value={roleDescription}
                            onChange={(e) => setRoleDescription(e.target.value)}
                            className="w-full p-2 border resize-none border-gray-300 rounded-md font-normal text-[#525252] text-sm h-24"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
                            Create Role
                        </button>
                    </div>
                </Form>
            </div>
        </CreateRoleModal>
    );
};

export default CreateRoleForm;
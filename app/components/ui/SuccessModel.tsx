import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './button';
import { CheckIcon } from '../icons/CheckIcon';
import { CloseIcon } from '../icons/CloseIcon';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-[424px]">
                <div className="p-6">
                    <div className="relative h-16 mb-4">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 border-4 border-green-500 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckIcon className="w-8 h-8 text-green-800" />
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="absolute top-0 right-0 text-gray-600 hover:text-gray-800"
                            aria-label="Close"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-2">Success</h2>
                        <p className="text-gray-600 mb-6">You have created your new role successfully!</p>
                        <Button
                            onClick={onClose}
                            className="w-full bg-orange-500 hover:bg-orange-600 py-3 text-white font-semibold rounded-lg"
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
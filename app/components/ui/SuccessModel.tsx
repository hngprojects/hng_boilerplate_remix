import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { CheckIcon } from "~/components/icons/CheckIcon";
import { CloseIcon } from "~/components/icons/CloseIcon";
import { Button } from "~/components/ui/button";

interface SuccessModalProperties {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProperties) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-[424px] rounded-lg bg-white shadow-xl">
        <div className="p-6">
          <div className="relative mb-4 h-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-green-500 bg-green-100">
                <CheckIcon className="h-8 w-8 text-green-800" />
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-0 top-0 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-semibold">Success</h2>
            <p className="mb-6 text-gray-600">
              You have created your new role successfully!
            </p>
            <Button
              onClick={onClose}
              variant="default"
              className="w-full bg-[#F97316] text-white hover:bg-[#F97316]/90"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

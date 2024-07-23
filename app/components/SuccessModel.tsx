"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface SuccessModalProperties {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProperties> = ({
  isOpen,
  onClose,
}) => {
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
                <svg
                  className="h-8 w-8 text-green-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute right-0 top-0 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-semibold">Success</h2>
            <p className="mb-6 text-gray-600">
              You have created your new role successfully!
            </p>
            <button
              onClick={onClose}
              className="w-full rounded bg-[#F97316] px-4 py-2 text-white hover:bg-[#F97316]/90 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

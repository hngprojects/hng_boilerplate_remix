import React, { useEffect, useRef, ReactNode } from 'react';
import { Card } from '../ui/card';

interface ModalProps {
  className?: string;
  show: boolean;
  toggleShow: (show: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ className, show, toggleShow, children }) => {
  const modal = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modal.current && !modal.current.contains(e.target as Node)) {
        toggleShow(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [toggleShow]);

  return (
    <Card>
      {show && (
        <div className="w-screen h-screen z-50 bg-black/20 fixed inset-0 flex justify-center items-center">
          <div
            className={`bg-white p-10 h-fit max-w-2xl w-1/4 rounded-lg relative m-8 ${className}`}
            ref={modal}
          >
            {/* <button
              type="button"
              className="absolute right-2 top-2 z-10 text-center bg-slate-600 rounded-full p-1 hover:bg-opacity-80 transition ease-in-out duration-150"
              onClick={() => toggleShow(true)}
            >
              *
            </button> */}
            <div className="max- w-full">{children}</div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Modal;
// context/ModalContext.tsx
// import { createContext, useContext, useState, ReactNode } from "react";

// interface ModalContextProps {
//   showModal: boolean;
//   toggleModal: (show: boolean) => void;
// }

// const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// export const useModal = () => {
//   const context = useContext(ModalContext);
//   if (!context) {
//     throw new Error("useModal must be used within a ModalProvider");
//   }
//   return context;
// };

// export const ModalProvider = ({ children }: { children: ReactNode }) => {
//   const [showModal, setShowModal] = useState(false);

//   const toggleModal = (show: boolean) => setShowModal(show);

//   return (
//     <ModalContext.Provider value={{ showModal, toggleModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };

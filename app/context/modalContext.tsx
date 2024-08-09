// app/context/ModalContext.tsx
import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProperties {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const ModalContext = createContext<ModalContextProperties | undefined>(
  undefined,
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

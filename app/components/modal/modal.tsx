import React, { ReactNode, useEffect, useRef } from "react";

import { Card } from "../ui/card";

interface ModalProperties {
  className?: string;
  show: boolean;
  toggleShow: (show: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProperties> = ({
  className,
  show,
  toggleShow,
  children,
}) => {
  const modal = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modal.current && !modal.current.contains(event.target as Node)) {
        toggleShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleShow]);

  return (
    <Card>
      {show && (
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/20">
          <div
            className={`relative m-8 h-fit max-w-2xl rounded-lg bg-background p-5 md:w-[28%] ${className}`}
            ref={modal}
          >
            <div className="max- w-full">{children}</div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Modal;

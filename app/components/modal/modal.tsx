import React, {ReactNode, useEffect, useRef } from "react";
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
                                        children 
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
        <div className="w-screen h-screen z-50 bg-black/20 fixed inset-0 flex justify-center items-center">
          <div
            className={`bg-background p-5 h-fit max-w-2xl md:w-[28%] rounded-lg relative m-8 ${className}`}
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

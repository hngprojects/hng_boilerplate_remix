import React from "react";
import styles from "~/styles/confirmation.module.css";

interface ConfirmationProps {
  heading: string;
  description: string;
  cancelButtonLabel: string;
  confirmButtonLabel: string;
  closeAction: () => void;
  cancelAction: () => void;
  confirmAction: () => void;
  isOpen: boolean;
  variant: "basic" | "success" | "destructive" | "confirmation" | "error";
}

const ConfirmationBox: React.FC<ConfirmationProps> = ({
  heading,
  description,
  cancelButtonLabel,
  confirmButtonLabel,
  closeAction,
  cancelAction,
  confirmAction,
  isOpen,
  variant,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    isOpen && (
      <div className={styles.overall}>
        <div className={`${styles.container} ${styles[variant]}`}>
          <div className={styles.icons}>
            <div className={styles.cancel1}>
              <img src="/x.svg" alt="" />
            </div>
            <div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.tick}
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="#096012"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                className={styles.cross}
                fill="none">
                <path
                  d="M18 6L6 18"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button onClick={cancelAction} className={styles.cancel2}>
              <img src="/x.svg" alt="" />
            </button>
          </div>
          <div className={styles.first}>
            <div className={styles.writing}>
              <h2 className={styles.header}>{heading}</h2>
              <p className={styles.desc}>{description}</p>
            </div>
            <button className={styles.close} onClick={cancelAction}>
              <img src="/x.svg" alt="the cancel button" />
            </button>
          </div>
          <div className={styles.second}>
            <button className={styles.cancel} onClick={closeAction}>
              {cancelButtonLabel}
            </button>
            <button className={styles.confirm} onClick={confirmAction}>
              {confirmButtonLabel}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConfirmationBox;

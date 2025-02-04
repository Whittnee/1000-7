import { FC, memo, ReactNode, useEffect } from "react";
import { ModalOverlay } from "../modal-overlay";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";
import styles from "./modal.module.scss";
import clsx from "clsx";

const modalRoot = document.getElementById("modals")!;

export type TModalProps = {
  onClose: () => void;
  children?: ReactNode;
  className?: string;
};

export const Modal: FC<TModalProps> = memo(
  ({ onClose, children, className }) => {
    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "unset";
      };
    }, [onClose]);

    return ReactDOM.createPortal(
      <ModalOverlay onClick={onClose}>
        <div className={clsx(styles.modal, className)}>
          <button type="button" onClick={onClose} className={styles.button}>
            <IoMdClose />
          </button>
          <div className={styles.content}>{children}</div>
        </div>
      </ModalOverlay>,
      modalRoot as HTMLDivElement
    );
  }
);

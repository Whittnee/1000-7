import { FC, memo } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./modal.module.scss";
import clsx from "clsx";
import { TModalProps } from "@/shared/ui/modal/modal-types";
import { ModalOverlay } from "@/shared/ui/modal-overlay";

export const Modal: FC<TModalProps> = memo(
  ({ onClose, children, className }) => {
    return (
      <ModalOverlay onClose={onClose}>
        <div className={clsx(styles.modal, className)}>
          <button type="button" onClick={onClose} className={styles.button}>
            <IoMdClose />
          </button>
          <div className={styles.content}>{children}</div>
        </div>
      </ModalOverlay>
    );
  }
);

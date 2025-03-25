import { FC, memo, SyntheticEvent, useEffect } from "react";
import styles from "./modal-overlay.module.scss";
import ReactDOM from "react-dom";
import { TModalOverlayProps } from "@/shared/ui/modal-overlay/modal-overlay-types";

const modalRoot = document.getElementById("modals")!;

export const ModalOverlay: FC<TModalOverlayProps> = memo(
  ({ onClose, children }) => {

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "unset";
      }
    }, [onClose]);
    return ReactDOM.createPortal(
      <div
        className={styles.overlay}
        onClick={(e: SyntheticEvent) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {children}
      </div>,
      modalRoot as HTMLDivElement
    );
  }
);

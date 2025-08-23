import { FC, memo, SyntheticEvent, useEffect } from "react";
import styles from "./styles.module.scss";
import ReactDOM from "react-dom";
import { TModalOverlayProps } from "@/shared/ui/modal-overlay/types";
import { motion } from "framer-motion";
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
        document.body.style.overflow = "";
      };
    }, [onClose]);
    return ReactDOM.createPortal(
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e: SyntheticEvent) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {children}
      </motion.div>,
      modalRoot as HTMLDivElement
    );
  }
);

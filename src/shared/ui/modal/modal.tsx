import { FC, memo } from "react";
import { IoMdClose } from "react-icons/io";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { TModalProps } from "./types";
import { ModalOverlay } from "@/shared/ui/modal-overlay";
import { motion } from "framer-motion";

export const Modal: FC<TModalProps> = memo(
  ({ onClose, children }) => {
    return (
      <ModalOverlay onClose={onClose}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3}}
          className={clsx(styles.modal)}>
          <button type="button" onClick={onClose} className={styles.button}>
            <IoMdClose />
          </button>
          <div className={styles.content}>{children}</div>
        </motion.div>
      </ModalOverlay>
    );
  }
);

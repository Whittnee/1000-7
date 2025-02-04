import { FC, memo, SyntheticEvent } from "react";
import styles from "./modal-overlay.module.scss";

type TModalOverlayProps = {
  onClick: () => void;
  children?: React.ReactNode
}

export const ModalOverlay: FC<TModalOverlayProps> = memo(({ onClick, children }) => (
  <div className={styles.overlay} onClick={(e: SyntheticEvent) => {
    if(e.target === e.currentTarget) onClick();
  }}>
    {children}
  </div>
));

import { ReactNode } from "react";

export type TModalProps = {
  onClose: () => void;
  children?: ReactNode;
  className?: string;
};
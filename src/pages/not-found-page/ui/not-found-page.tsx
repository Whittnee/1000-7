import { NotFound } from "@/widgets/not-found";
import { FC } from "react";
import styles from "./styles.module.scss";

export const NotFoundPage: FC = () => {

  return (
    <div className={styles.notFoundPage}>
      <NotFound />
    </div>
  );
};

import { FC } from "react";
import styles from "./styles.module.scss"

export const NotFound: FC = () => {

  return (
    <section className={styles.notFound}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.p}>Page not found</p>
    </section>
  );
};
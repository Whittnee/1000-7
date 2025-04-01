import { FC } from "react";
import styles from "./not-found.module.scss"

export const NotFound: FC = () => {
  const header = document.querySelector("header");
  const height = `calc(100vh - ${header?.offsetHeight || 0}px)`;
  return (
    <section className={styles.notFound} style={{ height: height }}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.p}>Page not found</p>
    </section>
  );
};
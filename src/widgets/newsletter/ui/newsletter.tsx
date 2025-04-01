import { MdOutlineEmail } from "react-icons/md";
import styles from "./newsletter.module.scss";
import { FC } from "react";

export const Newsletter: FC = () => {
  return (
    <article className={styles.newsletter}>
      <div className={styles.content}>
        <h3 className={styles.text}>
          stay upto date about <br /> our latest offers
        </h3>
        <form className={styles.form}>
          <label htmlFor="emailInput" style={{ display: "none" }}>
            Email
          </label>
          <div className={styles.inputWrapper}>
            <MdOutlineEmail className={styles.emailIcon} />
            <input
              type="email"
              id="emailInput"
              placeholder="Enter your email address"
            />
          </div>
          <button className={styles.button} type="button">
            Subscribe
          </button>
        </form>
      </div>
    </article>
  );
};

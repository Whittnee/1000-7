import { FC, SyntheticEvent, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@/shared/ui/button";
import { useDispatch } from "react-redux";
import { showOverlay } from "@/entities/overlay";
import styles from "./styles.module.scss";

export const NewsletterFeature: FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!value) return;
    setValue('')
    dispatch(showOverlay({ key: 'successSubscription' }))
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
      <article className={styles.newsletter}>
        <div className={styles.content}>
          <h3 className={styles.text}>
            stay upto date about <br /> our latest offers
          </h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="emailInput" style={{ display: "none" }}>
              Email
            </label>
            <div className={styles.inputWrapper}>
              <MdOutlineEmail className={styles.emailIcon} />
              <input
                type="email"
                id="emailInput"
                placeholder="Enter your email address"
                value={value}
                onChange={handleChange}
                required
              />
            </div>
            <Button label="Subscribe" type="submit" className={styles.subscribe} />
          </form>
        </div>
      </article>
  );
};

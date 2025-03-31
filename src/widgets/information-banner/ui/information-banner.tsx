import clsx from "clsx";
import styles from "./information-banner.module.scss";
import React, { FC, useEffect, useState } from "react";

export const InformationBanner: FC = () => {

  const text = "1000-7"; 
  // "Find clothes that matches your ghoul style";
  const [letters, setLetters] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  const header = document.querySelector("header");
  const height = `calc(100vh - ${header?.offsetHeight || 0}px)`;
  
  useEffect(() => {
    setLetters(text.split(""));
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section
      className={clsx(
        styles.informationBanner,
        styles.firstDecoratedZone,
        styles.secondDecoratedZone
      )}
      style={{ height: height }}
    >
      <div className={styles.container}>
        <h1 className={styles.h1}>
          {letters.map((letter, i) => (
            <React.Fragment key={i}>
              <span
                className={clsx(styles.animateGlow, {
                  [styles.visible]: visible,
                })}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {letter}
              </span>
            </React.Fragment>
          ))}
        </h1>
      </div>
    </section>
  );
};

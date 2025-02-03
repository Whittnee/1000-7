
import styles from "./app-footer.module.scss";
import {
  FaApplePay,
  FaGithub,
  FaGooglePay,
  FaInstagram,
} from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { FC } from "react";
import { Separator } from "../ui/separator";
import { FaXTwitter } from "react-icons/fa6";

export const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.logo}>1000-7</h3>
          <span className={styles.text}>
            We have clothes that suits your ghoul style and which you're proud
            to wear.
          </span>
          <ul className={styles.icons}>
            <li>
              <a className={styles.link} href="">
                <FaInstagram className={styles.icon} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="https://github.com/Whittnee" target="_blank">
                <FaGithub className={styles.icon} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="/" target="_blank">
                <FaXTwitter className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Separator/>
      <section className={styles.license}>
        <p className={styles.text}>1000-7 © 2024-2025, All rights reserved.</p>
        <ul className={styles.icons}>
          <li>
            <RiVisaLine className={styles.paymentIcon} />
          </li>
          <li>
            <SiMastercard className={styles.paymentIcon} />
          </li>
          <li>
            <FaGooglePay className={styles.paymentIcon} />
          </li>
          <li>
            <FaApplePay className={styles.paymentIcon} />
          </li>
        </ul>
      </section>
    </footer>
  );
};

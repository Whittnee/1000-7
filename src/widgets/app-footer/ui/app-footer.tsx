import { FC } from "react";
import styles from "./styles.module.scss"
import { FaApplePay, FaGithub, FaGooglePay, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "@/shared/ui/separator";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { LogoButtonFeature } from "@/features/logo-button-feature";

export const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.top}>
        <div className={styles.info}>
          <LogoButtonFeature action={false}/>
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
      <section className={styles.bottom}>
        <p className={styles.copyright}>1000-7 © 2024-2025, All rights reserved.</p>
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
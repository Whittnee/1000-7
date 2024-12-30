import { Link } from "react-router";
import styles from "./app-footer.module.scss";
import { FaApplePay, FaGithub, FaGooglePay, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";

export const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <h3 className={styles.logo}>1000-7</h3>
          <span className={styles.text}>
            We have clothes that highlight your ghoul style and which you’ll be
            proud to wear.
          </span>
          <ul className={styles.ulIcons}>
            <li>
              <a className={styles.link} href="">
                <FaInstagram className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://github.com/Whittnee"
                target="_blank"
              >
                <FaGithub className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="/"
                target="_blank"
              >
                <FaTwitter className={styles.socialIcon} />
              </a>
            </li>
          </ul>
        </div>
        <nav className={styles.menu}>
          <div className={styles.div}>
            <h4 className={styles.h4}>company</h4>
            <ul className={styles.ul}>
              <li>
                <Link to="/about" className={styles.text}>About</Link>
              </li>
              <li>
                <Link to="/about" className={styles.text}>Career</Link>
              </li>
            </ul>
          </div>
          <div className={styles.div}>
            <h4 className={styles.h4}>faq</h4>
            <ul className={styles.ul}>
              <li>
                <Link to="/about" className={styles.text}>Account</Link>
              </li>
              <li>
                <Link to="/about" className={styles.text}>Payment</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.license}>
        <p className={styles.text}>1000-7 © 2024-2025, All rights reserved.</p>
        <ul className={styles.paymentIcons}>
          <li><RiVisaLine className={styles.paymentIcon}/></li>
          <li><SiMastercard className={styles.paymentIcon}/></li>
          <li><FaGooglePay className={styles.paymentIcon}/></li>
          <li><FaApplePay className={styles.paymentIcon}/></li>
        </ul>
      </div>
    </footer>
  );
};

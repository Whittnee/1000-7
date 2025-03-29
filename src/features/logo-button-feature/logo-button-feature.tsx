import { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./logo-button-feature.module.scss"

export const LogoButtonFeature: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else navigate("/");
  }

  return (
    <button
      className={styles.logo}
      onClick={handleClick}
      style={{ outline: "none" }}
      type="button"
    >
      1000-7
    </button>
  );
};

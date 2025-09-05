import { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./styles.module.scss";
import { TLogoButtonFeatureProps } from "@/features/logo-button-feature/types";
import { useDispatch } from "@/entities/store";
import { hideOverlay } from "@/entities/overlay";

export const LogoButtonFeature: FC<TLogoButtonFeatureProps> = ({ action }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (location.pathname === "/" && location.search === '') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else navigate("/");
    dispatch(hideOverlay())
  };

  return (
    <button
      className={styles.logo}
      onClick={action ? handleClick : undefined}
      style={{ pointerEvents: action ? "auto" : "none" }}
      type="button"
    >
      1000-7
    </button>
  );
};

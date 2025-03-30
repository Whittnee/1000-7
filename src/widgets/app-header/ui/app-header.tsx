import { selectCart } from "@/entities/cart";
import { selectClothes } from "@/entities/clothes";
import { useSelector } from "@/entities/store";
import { FC } from "react";
import styles from "./app-header.module.scss"
import {  FaShoppingBag } from "react-icons/fa";
import { LogoButtonFeature } from "@/features/logo-button-feature";
import { SearchBarFeature } from "@/features/search-bar-feature";
import { Link } from "react-router";
import clsx from "clsx";
import { GrCatalog } from "react-icons/gr";

export const AppHeader: FC = () => {
  const clothes = useSelector(selectClothes);
  const cartClothes = useSelector(selectCart);

  return (
    <header className={styles.header}>
    <nav className={styles.menu}>
      <div className={styles.left}>
        <LogoButtonFeature/>
        <Link to="/catalog" className={clsx(styles.link, styles.catalog)}>
          <GrCatalog/>
        </Link>
      </div>
      <SearchBarFeature clothes={clothes}/>
      <Link to="/cart" className={clsx(styles.link, styles.cart)}>
        <FaShoppingBag />
        {cartClothes.length > 0 && (
          <span className={styles.count}>{cartClothes.length}</span>
        )}
      </Link>
    </nav>
  </header>
  )
}
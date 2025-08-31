import { selectCart } from "@/entities/cart";
import { selectProducts } from "@/entities/clothes";
import { useSelector } from "@/entities/store";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FaShoppingBag } from "react-icons/fa";
import { LogoButtonFeature } from "@/features/logo-button-feature";
import { SearchBarFeature } from "@/features/search-bar-feature";
import { Link } from "react-router";
import clsx from "clsx";
import { GrCatalog } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import { TfiAlignJustify } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export const AppHeader: FC = () => {
  const clothes = useSelector(selectProducts);
  const cartClothes = useSelector(selectCart);
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const [isDropdownClicked, setIsDropdownClicked] = useState<boolean>(false);
  const [isSearchBarClicked, setIsSearchBarClicked] = useState<boolean>(false);

  const handleDropdownClose = () => {
    setIsDropdownClicked(false);
  };

  const handleSearchBarClose = () => {
    setIsSearchBarClicked(false);
  };
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDropdownClose();
    };
    document.addEventListener("keydown", handleEsc);
    if (isDropdownClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isDropdownClicked]);

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        {isTablet ? (
          isSearchBarClicked ? (
            <div className={styles.searchBarMobile}>
              <IoIosArrowBack
                className={styles.icon}
                onClick={handleSearchBarClose}
              />{" "}
              <SearchBarFeature
                clothes={clothes}
                style={{ maxWidth: "100%" }}
                handleEvent={handleSearchBarClose}
                autofocus
              />
            </div>
          ) : (
            <>
              <div className={styles.left}>
                <LogoButtonFeature action />
              </div>
              <CiSearch
                className={clsx(styles.icon, styles.searchIcon)}
                onClick={() => setIsSearchBarClicked((prev) => !prev)}
              />
              <div className={styles.right}>
                <TfiAlignJustify
                  className={clsx(styles.icon, styles.listIcon)}
                  onClick={() => setIsDropdownClicked(true)}
                />
              </div>
            </>
          )
        ) : (
          <>
            <div className={styles.left}>
              <LogoButtonFeature action />
              <Link to="/catalog" className={styles.icon}>
                <GrCatalog />
              </Link>
            </div>
            <SearchBarFeature clothes={clothes} autofocus={false} />
            <div className={styles.right}>
              <Link to="/cart" className={clsx(styles.icon, styles.cartIcon)}>
                <FaShoppingBag />
                {cartClothes.length > 0 && (
                  <span className={styles.count}>{cartClothes.length}</span>
                )}
              </Link>
            </div>
          </>
        )}

        <AnimatePresence>
          {isDropdownClicked && (
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e: SyntheticEvent) => {
                if (e.target === e.currentTarget) handleDropdownClose();
              }}
            >
              <motion.nav
                className={styles.mobileDropdown}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <IoMdClose
                  className={clsx(styles.icon, styles.closeIcon)}
                  onClick={handleDropdownClose}
                />
                <Link to="/catalog" onClick={handleDropdownClose}>
                  Catalog
                </Link>
                <Link to="/cart" onClick={handleDropdownClose}>
                  Cart
                </Link>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

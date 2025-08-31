import {
  ClothesCard,
  selectProducts,
  useClothesFilters,
} from "@/entities/clothes";
import { useSelector } from "@/entities/store";
import {
  FC,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import styles from "./styles.module.scss";
import { ProductsFiltersFeature } from "@/features/products-filters-feature";
import { useMediaQuery } from "react-responsive";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { RxMixerVertical } from "react-icons/rx";
import clsx from "clsx";

export const Catalog: FC = () => {
  const clothes = useSelector(selectProducts);
  const {
    tempCategory,
    tempPrices,
    tempSize,
    tempColor,
    filteredClothes,
    setTempCategory,
    setTempPrices,
    setTempSize,
    setTempColor,
    handleFilter,
  } = useClothesFilters(clothes);
  const isMobile = useMediaQuery({ maxWidth: 510 });
  const isTablet = useMediaQuery({ minWidth: 511, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1230 });

  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const handleFiltersClose = () => {
    setIsFiltersOpen(false);
  };
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleFiltersClose();
    };
    document.addEventListener("keydown", handleEsc);

    if (isFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isFiltersOpen]);

  return (
    <section className={styles.catalog}>
      {!(isMobile || isTablet) && (
        <ProductsFiltersFeature
          size="desktop"
          selectedCategory={tempCategory}
          prices={tempPrices}
          selectedSize={tempSize}
          selectedColor={tempColor}
          setSelectedCategory={setTempCategory}
          setSelectedColor={setTempColor}
          setSelectedSize={setTempSize}
          setPrices={setTempPrices}
          handleFilter={handleFilter}
        />
      )}
      <div className={styles.content}>
        <div
          className={clsx(
            styles.header,
            styles[isMobile || isTablet ? "mobile" : "desktop"]
          )}
        >
          <h2 className={styles.title}>Catalog</h2>
          {(isMobile || isTablet) && (
            <RxMixerVertical
              className={styles.icon}
              onClick={() => setIsFiltersOpen(true)}
            />
          )}
        </div>
        <ul className={styles.products}>
          {filteredClothes.map((item) => (
            <li key={item.id}>
              <ClothesCard
                size={
                  isMobile ? "small" : isTablet || isLaptop ? "medium" : "big"
                }
                {...item}
              />
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e: SyntheticEvent) => {
              if (e.target === e.currentTarget) handleFiltersClose();
            }}
          >
            <motion.div
              className={styles.mobileDropdown}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <ProductsFiltersFeature
                size="mobile"
                className={styles.productsFilters}
                selectedCategory={tempCategory}
                prices={tempPrices}
                selectedSize={tempSize}
                selectedColor={tempColor}
                setSelectedCategory={setTempCategory}
                setSelectedColor={setTempColor}
                setSelectedSize={setTempSize}
                setPrices={setTempPrices}
                handleFilter={handleFilter}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

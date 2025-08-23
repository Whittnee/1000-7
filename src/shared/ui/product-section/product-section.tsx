import { ClothesCard } from "@/entities/clothes";
import { TProductSectionProps } from "@/shared/ui/product-section";
import { FC, memo, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export const ProductSection: FC<TProductSectionProps> = memo(
  ({ products, title }) => {
    const isMobile = useMediaQuery({ maxWidth: 470 });
    const isTablet = useMediaQuery({ minWidth: 471, maxWidth: 930 });

    const [isFirstRender] = useState(() => {
      return sessionStorage.getItem(`isFirstRender-${title}`) !== "true"
    })
    useEffect(() => {
      if(isFirstRender) {
        sessionStorage.setItem(`isFirstRender-${title}`, "true")
      }
    }, [isFirstRender, title])
    
    return (
      <motion.section
        className={styles.productSection}
        initial={isFirstRender && { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.id}>
              <ClothesCard
                size={isMobile ? "small" : isTablet ? "medium" : "big"}
                {...product}
              />
            </li>
          ))}
        </ul>
      </motion.section>
    );
  }
);

import { ClothesCard } from "@/entities/clothes";
import { TProductSectionProps } from "@/shared/ui/product-section";
import { FC, memo } from "react";
import styles from "./styles.module.scss";
import { useMediaQuery } from "react-responsive";

export const ProductSection: FC<TProductSectionProps> = memo(
  ({ products, title }) => {
    const isMobile = useMediaQuery({ maxWidth: 470 });
    const isTablet = useMediaQuery({ minWidth: 471, maxWidth: 930 });
    return (
      <section className={styles.productSection}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.products}>
          {products.map((product) => (
            <li key={product.id}>
              <ClothesCard
                size={isMobile ? "small" : isTablet ? "medium" : "big"}
                isTouchDevice={isMobile || isTablet}
                {...product}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
);

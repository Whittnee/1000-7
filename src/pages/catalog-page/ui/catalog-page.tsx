import { Catalog } from "@/widgets/catalog";
import { FC } from "react";
import styles from "./styles.module.scss"

export const CatalogPage: FC = () => {
  return (
    <div className={styles.catalogPage}>
      <Catalog />
    </div>
  );
};

import { FC, useEffect } from "react";
import { ProductCard } from "@/widgets/product-card/ui/product-card";
import { ProductTabs } from "@/widgets/product-tabs";
import { useParams } from "react-router";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "@/entities/store";
import { selectIsLoadingProduct, selectProduct } from "@/entities/product";
import { getProductThunk } from "@/entities/product/model/productSlice";
import { Preloader } from "@/shared/ui/preloader";
import { MightLikeSection } from "@/widgets/might-like-section";

export const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loadingProduct = useSelector(selectIsLoadingProduct);
  const clothes = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductThunk(Number(id)));
  }, [id, dispatch]);

  return (
    <div className={styles.productPage}>
      {!clothes || loadingProduct ? (
        <div className={styles.preloader}>
          <Preloader size="big" />
        </div>
      ) : (
        <div className={styles.product}>
          <ProductCard {...clothes} />
          <ProductTabs />
          <MightLikeSection />
        </div>
      )}
    </div>
  );
};

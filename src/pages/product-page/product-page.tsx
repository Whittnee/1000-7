import { FC, useEffect } from "react";
import { ProductCard } from "@/widgets/product-card/ui/product-card";
import { ProductTabs } from "@/widgets/product-tabs";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "@/entities/store";
import { selectIsLoadingProduct, selectProduct } from "@/entities/product";
import { getProductThunk } from "@/entities/product/model/productSlice";
import { Preloader } from "@/shared/ui/preloader";
import { MightLike } from "@/widgets/might-like";

export const ProductPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loadingProduct = useSelector(selectIsLoadingProduct);
  const clothes = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductThunk(Number(id)));
  }, [id, dispatch]);

  if (!clothes || loadingProduct) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Preloader size="big" />
      </div>
    );
  }
  return (
    <>
      <section>
        <ProductCard {...clothes} />
        <ProductTabs />
      </section>
      <MightLike />
    </>
  );
};

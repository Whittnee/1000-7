import { FC, useEffect, useMemo, useState } from "react";
import { useSelector } from "@/entities/store";
import { selectProductsByNew } from "@/entities/clothes";
import { TSlicedProduct } from "@/shared/types/products";
import { ProductSection } from "@/shared/ui/product-section/product-section";
import { getRandomInt } from "@/shared/lib/lib";

export const NewArrivalsSection: FC = () => {
  const products = useSelector(selectProductsByNew);
  const [visibleProducts, setVisibleProducts] = useState<TSlicedProduct[]>([]);
  
  const randomInt = useMemo(() => getRandomInt(0, Math.max(0, products.length - 5)), [products.length])

  useEffect(() => {
    setVisibleProducts(products.slice(randomInt, randomInt + 5))
  }, [products, randomInt])

  return (
    <ProductSection products={visibleProducts} title="New Arrivals"/>
  );
};

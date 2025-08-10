import { FC } from "react";
import { useParams } from "react-router";
import { useSelector } from "@/entities/store";
import { selectCart } from "@/entities/cart";
import { selectProducts } from "@/entities/clothes";
import { ProductSection } from "@/shared/ui/product-section/product-section";

export const MightLikeSection: FC = () => {
  const { id } = useParams();
  const cartProducts = useSelector(selectCart);
  const products = useSelector(selectProducts);
  const clothesIds: number[] = [];
  if (id) clothesIds.push(Number(id))
  else clothesIds.push(...cartProducts.map((item) => item.id));

  const filteredClothes = products
    .filter((product) => !clothesIds.includes(product.id))
    .slice(0, 5);

  return (
    <ProductSection products={filteredClothes} title="You Might Also Like"/>
  );
};

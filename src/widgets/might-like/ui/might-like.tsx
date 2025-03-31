import { FC } from "react";
import styles from "./might-like.module.scss";
import { useParams } from "react-router";
import { useSelector } from "@/entities/store";
import { selectCart } from "@/entities/cart";
import { ClothesCard, selectClothes } from "@/entities/clothes";

export const MightLike: FC = () => {
  const { id } = useParams();
  const cartClothes = useSelector(selectCart);
  const clothes = useSelector(selectClothes);
  const clothesIds: number[] = [];
  if (id) clothesIds.push(Number(id));
  else clothesIds.push(...cartClothes.map((item) => item.id));

  const filteredClothes = clothes
    .filter((item) => !clothesIds.includes(item.id))
    .slice(0, 5);
  return (
    <section className={styles.mightLike}>
      <h2 className={styles.h2}>You Might Also Like</h2>
      <ul className={styles.clothes}>
        {filteredClothes.map((item) => (
          <ClothesCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

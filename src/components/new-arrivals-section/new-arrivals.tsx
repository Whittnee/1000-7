import { FC } from "react"
import { ClothesCard } from "../clothes-card"
import styles from './new-arrivals.module.scss'
import { useSelector } from "../../services/store"
import { selectClothesByNew } from "../../services/slices/clothesSlice"

export const NewArrivals: FC = () => {
  const clothes = useSelector(selectClothesByNew)

  return (
    <section className={styles.newArrivals}>
      <h2 className={styles.h2}>New Arrivals</h2>
      <ul className={styles.clothes}>
        {clothes.map(item => (
          item.new && <ClothesCard key={item.id} {...item}/>
        ))}
      </ul>
    </section>
  )
}
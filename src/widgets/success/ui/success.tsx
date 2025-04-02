import { FC } from "react"
import { FaCheckCircle } from "react-icons/fa"
import styles from "./success.module.scss"

export const Success: FC = () => {
  return (
    <div className={styles.success}>
      <FaCheckCircle className={styles.icon}/>
      <h2 className={styles.h2}>
        The purchase was successful!
      </h2>
      <p className={styles.p}>
        Thank you for your purchase. We'll send you a confirmation email.
      </p>
    </div>
  )
}
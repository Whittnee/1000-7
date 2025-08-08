import { FC } from "react"
import { FaCheckCircle } from "react-icons/fa"
import styles from "./styles.module.scss"

export const SuccessOrderOverlay: FC = () => {
  return (
    <div className={styles.successOrderOverlay}>
      <FaCheckCircle className={styles.icon}/>
      <h2 className={styles.title}>
        The purchase was successful!
      </h2>
      <p className={styles.text}>
        Thank you for your purchase. We'll send you a confirmation email.
      </p>
    </div>
  )
}
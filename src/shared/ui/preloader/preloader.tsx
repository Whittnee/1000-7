import { TPreloaderProps } from "./types"
import clsx from "clsx"
import { FC, memo } from "react"
import styles from "./styles.module.scss"

export const Preloader: FC<TPreloaderProps> = memo(({size = 'small'}) => {
  return (
    <div className={styles.preloader}>
      <div className={clsx(styles.circle, styles[size])}></div>
    </div>
  )
})
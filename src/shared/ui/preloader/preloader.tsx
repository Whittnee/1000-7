import { TPreloaderProps } from "@/shared/ui/preloader/preloader-types"
import clsx from "clsx"
import { FC, memo } from "react"
import styles from "./preloader.module.scss"

export const Preloader: FC<TPreloaderProps> = memo(({size = 'small'}) => {
  return (
    <div className={styles.preloader}>
      <div className={clsx(styles.circle, styles[size])}></div>
    </div>
  )
})
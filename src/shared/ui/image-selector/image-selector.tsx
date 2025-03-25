import { TImageSelectorProps } from "@/shared/ui/image-selector/image-selector-types";
import { FC, memo } from "react";
import styles from "./image-selector.module.scss"
import clsx from "clsx";

export const ImageSelector: FC<TImageSelectorProps> = memo(({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className={styles.imageSelector}>
      {images.map((image) => (
        <img
          key={image}
          className={clsx(styles.image, {[styles.active]: selectedImage === image})}
          src={image}
          onMouseEnter={() => setSelectedImage(image)}/>
      ))}
    </div>
  );
});
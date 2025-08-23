import { TImageSelectorProps } from "@/shared/ui/image-selector/types";
import { FC, memo } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Image } from "@/shared/ui/image/image";
import { useMediaQuery } from "react-responsive";

export const ImageSelector: FC<TImageSelectorProps> = memo(
  ({
    images,
    direction = "row",
    selectedImage,
    setSelectedImage,
    className,
    ...otherProps
  }) => {
    const maxImages = 3;
    const filledImages: (string | null)[] = [...images];
    while (filledImages.length < maxImages) {
      filledImages.push(null);
    }
    
    const isTablet = useMediaQuery({ maxWidth: '768px'})
    return (
      <ul className={clsx(styles.imageSelector, styles[direction])}>
        {filledImages.map((image, index) => (
          <li key={index}>
            {image ? (
              <Image
                className={clsx(styles.image, className, {
                  [styles.active]: selectedImage === image,
                })}
                src={image}
                onMouseEnter={!isTablet ? () => setSelectedImage(image) : undefined}
                onClick={isTablet ? () => setSelectedImage(image) : undefined}
                {...otherProps}
              />
            ) : (
              <div aria-hidden className={clsx(styles.emptyImage, className)} />
            )}
          </li>
        ))}
      </ul>
    );
  }
);

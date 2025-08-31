import { CartActionsFeature } from "@/features/cart-actions-feature";
import { ColorSelector } from "@/shared/ui/color-selector";
import { ImageSelector } from "@/shared/ui/image-selector";
import { ModalOverlay } from "@/shared/ui/modal-overlay";
import { Separator } from "@/shared/ui/separator";
import { SizeSelector } from "@/shared/ui/size-selector";
import { FC, useEffect, useState } from "react";
import { TProduct } from "@/shared/types/products";
import { StarsRaiting } from "@/shared/ui/stars-raiting";
import { TUserLocation } from "@/shared/types/user";
import { Navigation } from "@/shared/ui/navigation";
import { useMediaQuery } from "react-responsive";
import { Image } from "@/shared/ui/image";
import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";

export const ProductCard: FC<TProduct> = ({
  category,
  description,
  discount,
  discountedPrice,
  images,
  name,
  price,
  rating,
  sizes,
  colors,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [showPicture, setShowPicture] = useState<boolean>(false);
  const isTablet = useMediaQuery({ maxWidth: 845 });
  const isLaptop = useMediaQuery({ minWidth: 846, maxWidth: 1140});
  const isComputer = useMediaQuery({ maxWidth: 1700})

  const [location] = useState<TUserLocation | null>(() => {
    const stored = localStorage.getItem("location");
    return stored ? JSON.parse(stored) : null;
  });
  const userId = localStorage.getItem("userId")!;

  useEffect(() => {
    if (colors.length > 0 && images.length > 0) {
      setSelectedColor(colors?.[0] || "");
      setSelectedImage(images?.[0] || "");
      setSelectedSize("");
    }
  }, [colors, images]);

  const handleShowPicture = () => {
    setShowPicture((prev) => !prev);
  };

  return (
    <div className={styles.productCard}>
      <Navigation className={styles.navigation} name={name} category={category} />
      <div className={styles.content}>
        <div className={styles.images}>
          <ImageSelector
            className={styles.selectedImage}
            direction={isComputer ? 'row' : 'column'}
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <Image
            onClick={handleShowPicture}
            className={styles.mainImage}
            src={selectedImage}
            alt={name}
          />
        </div>
        <AnimatePresence>
          {showPicture && (
            <ModalOverlay onClose={handleShowPicture}>
              <Image className={styles.bigImg} src={selectedImage} alt={name} />
            </ModalOverlay>
          )}
        </AnimatePresence>
        <div className={styles.info}>
          <div className={styles.header}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.raiting}>
              <StarsRaiting className={styles.star} rating={rating} />
              <p className={styles.number}>{rating}/5</p>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
          <Separator />
          <ColorSelector
            colors={colors}
            selectedColor={selectedColor}
            size={isLaptop ? 'small' : "medium"}
            showTitle
            setSelectedColor={setSelectedColor}
          />
          <Separator />
          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            size={isLaptop ? 'small' : "medium"}
            showTitle
            setSelectedSize={setSelectedSize}
          />
        {isTablet && <Separator />}
        </div>
        <CartActionsFeature
          size={isLaptop ? 'medium' : 'big' }
          className={styles.cartActions}
          location={location}
          userId={userId}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          prices={{ price, discountedPrice, discount }}
        />
      </div>
    </div>
  );
};

import { CartActionsFeature } from "@/features/cart";
import { ColorSelector } from "@/shared/ui/color-selector";
import { ImageSelector } from "@/shared/ui/image-selector";
import { ModalOverlay } from "@/shared/ui/modal-overlay";
import { Separator } from "@/shared/ui/separator";
import { SizeSelector } from "@/shared/ui/size-selector";
import { FC, useCallback, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import styles from "./product-card.module.scss";
import { TClothes } from "@/shared/types/clothes";
import { StarsRaiting } from "@/shared/ui/stars-raiting";
import { TUserLocation } from "@/shared/types/user";

export const ProductCard: FC<TClothes> = ({
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
  const [location] = useState<TUserLocation | null>(() => {
    const stored = localStorage.getItem("location");
    return stored ? JSON.parse(stored) : null
  });
  const userId = localStorage.getItem("userId")!;


  useEffect(() => {
    if (colors.length > 0 && images.length > 0) {
      setSelectedColor(colors?.[0] || "");
      setSelectedImage(images?.[0] || "");
      setSelectedSize("");
    }
  }, [colors, images]);

  const handleShowPicture = useCallback(() => {
    setShowPicture((prev) => !prev);
  }, []);

  return (
    <div className={styles.productCard}>
      <ul className={styles.navigation}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/catalog">
            <IoIosArrowForward /> Catalog
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/catalog/?category=${category}`}>
            <IoIosArrowForward /> {category}
          </Link>
        </li>
        <li className={styles.link}>
          <IoIosArrowForward /> {name}
        </li>
      </ul>
      <div className={styles.content}>
        <div className={styles.images}>
          <ImageSelector
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
          <img
            onClick={handleShowPicture}
            className={styles.img}
            src={selectedImage}
            alt={name}
          />
        </div>
        {showPicture && (
          <ModalOverlay onClose={handleShowPicture}>
            <img className={styles.bigImg} src={selectedImage} alt={name} />
          </ModalOverlay>
        )}
        <div className={styles.info}>
          <div className={styles.header}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.raiting}>
              <StarsRaiting className={styles.star} rating={rating} />
              <p className={styles.raiting}>{rating}/5</p>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
          <Separator />
          <ColorSelector
            colors={colors}
            selectedColor={selectedColor}
            size="medium"
            showTitle
            setSelectedColor={setSelectedColor}
          />
          <Separator />
          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            size="medium"
            showTitle
            setSelectedSize={setSelectedSize}
          />
        </div>
        <CartActionsFeature
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

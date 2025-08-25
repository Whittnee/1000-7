import { FC, memo } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.scss";
import { TReview } from "@/shared/types/review";
import { StarsRaiting } from "@/shared/ui/stars-raiting";
import { Image } from "@/shared/ui/image";

export const ReviewCard: FC<TReview> = memo(
  ({ name, image, rating, comment, postedOn }) => {
    return (
      <div className={styles.reviewCard}>
        <div className={styles.content}>
          <StarsRaiting rating={rating} className={styles.star} />
          <div className={styles.info}>
            <Image src={image} alt={name} className={styles.img}/>
            <p className={styles.name}>
              <span className={styles.nameWithIcon}>
                {name}
                <FaCheckCircle className={styles.checkMark} />
              </span>
            </p>
          </div>
          <p className={styles.comment}>{comment}</p>
        </div>
        <p className={styles.postedOn}>Posted on {postedOn}</p>
      </div>
    );
  }
);

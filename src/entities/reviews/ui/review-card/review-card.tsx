import { FC, memo } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./review-card.module.scss";
import { TReview } from "@/shared/types/review";
import { StarsRaiting } from "@/shared/ui/stars-raiting";

export const ReviewCard: FC<TReview> = memo(
  ({ name, image, rating, comment, postedOn }) => {
    return (
      <li className={styles.review}>
        <div className={styles.content}>
          <StarsRaiting rating={rating} className={styles.star}/>
          <div className={styles.info}>
            <img className={styles.img} src={image} alt={name} />
            <p className={styles.name}>{name}</p>
            <FaCheckCircle className={styles.checkMark} />
          </div>
          <p className={styles.comment}>{comment}</p>
        </div>
        <p className={styles.postedOn}>Posted on {postedOn}</p>
      </li>
    );
  }
);

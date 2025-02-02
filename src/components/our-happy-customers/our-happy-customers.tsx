import { FC, useEffect, useState } from "react";
import { ReviewCard } from "../review-card";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./our-happy-customers.module.scss";
import "swiper/swiper-bundle.css";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSelector } from "../../services/store";
import { selectReviews } from "../../services/slices/reviewsSlice";

export const OurHappyCustomers: FC = () => {
  const reviews = useSelector(selectReviews)
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  useEffect(() => {
    if(swiperInstance) {
      swiperInstance.slideTo(3)
    }
  }, [swiperInstance])
  return (
    <section>
      <h2 className={styles.h2}>Our happy customers</h2>
      <Swiper
        onSwiper={setSwiperInstance}
        effect="coverflow"
        className={styles.swiper}
        modules={[Navigation, Pagination, EffectCoverflow]}
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: "#rightArrow",
          prevEl: "#leftArrow",
        }}
        pagination={{ el: "#pagination", clickable: true }}
      >
        {reviews.map((item) => (
          <SwiperSlide className={styles.swiperSlide} key={item.id}>
            <ReviewCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.sliderControler}>
        <button id="leftArrow" className={styles.button}>
          <FaArrowLeft />
        </button>
        <div id="pagination" className={styles.pagination}></div>
        <button id="rightArrow" className={styles.button}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./our-happy-customers.module.scss";
import "swiper/swiper-bundle.css";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ReviewCard, selectReviews } from "@/entities/reviews";
import { useSelector } from "@/entities/store";

export const OurHappyCustomers: FC = () => {
  const reviews = useSelector(selectReviews);
  const bestReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(2);
    }
  }, [swiperInstance]);

  return (
    <section className={styles.ourHappyCustomers}>
      <h2 className={styles.h2}>Our happy customers</h2>
      <Swiper
        navigation={{
          nextEl: rightArrow.current,
          prevEl: leftArrow.current,
        }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          setTimeout(() => {
            // @ts-expect-error/the property exists
            swiper.params.navigation.prevEl = leftArrow.current; 
            // @ts-expect-error/the property exists
            swiper.params.navigation.nextEl = rightArrow.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
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
        pagination={{ el: "#pagination", clickable: true }}
      >
        {bestReviews.map((item) => (
          <SwiperSlide className={styles.swiperSlide} key={item.id}>
            <ReviewCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.sliderControler}>
        <button ref={leftArrow} className={styles.button}>
          <FaArrowLeft />
        </button>
        <div id="pagination" className={styles.pagination}></div>
        <button ref={rightArrow} className={styles.button}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/swiper-bundle.css";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ReviewCard, selectReviews } from "@/entities/reviews";
import { useSelector } from "@/entities/store";
import { motion } from "framer-motion";

export const OurHappyCustomers: FC = () => {
  const reviews = useSelector(selectReviews);
  const bestReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const leftArrow = useRef<HTMLButtonElement>(null);
  const rightArrow = useRef<HTMLButtonElement>(null);
  
  const [isFirstRender] = useState(() => {
    return sessionStorage.getItem(`isFirstRender-OurHappyCustomers`) !== "true";
  });
  useEffect(() => {
    if (isFirstRender) {
      sessionStorage.setItem(`isFirstRender-OurHappyCustomers`, "true");
    }
  }, [isFirstRender]);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(2);
    }
  }, [swiperInstance]);

  return (
    <motion.section
      className={styles.ourHappyCustomers}
      initial={isFirstRender && { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
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
        direction="horizontal"
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
        pagination={{
          el: "#pagination",
          clickable: true,
          type: "bullets",
        }}
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
    </motion.section>
  );
};

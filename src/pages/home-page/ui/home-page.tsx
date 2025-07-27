import { FC } from "react";
import { NewArrivalsSection } from "@/widgets/new-arrivals-section";
import { TopSellingSection } from "@/widgets/top-selling-section"; 
import { WelcomeBanner } from "@/widgets/welcome-banner";
import styles from "./styles.module.scss"
import { OurHappyCustomers } from "@/widgets/our-happy-customers";

export const HomePage: FC = () => {
  return (
    <div className={styles.homePage}>
      <WelcomeBanner/>
      <NewArrivalsSection/>
      <TopSellingSection/>
      <OurHappyCustomers/>
    </div>
  );
};

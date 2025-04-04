import { FC } from "react";

import { NewArrivals } from "@/widgets/new-arrivals";
import { TopSelling } from "@/widgets/top-selling";
import { InformationBanner } from "@/widgets/information-banner";
import { OurHappyCustomers } from "@/widgets/our-happy-customers";

export const HomePage: FC = () => {
  return (
    <>
      <InformationBanner />
      <NewArrivals/>
      <TopSelling/>
      <OurHappyCustomers />
    </>
  );
};

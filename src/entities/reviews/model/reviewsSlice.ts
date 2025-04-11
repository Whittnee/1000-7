import { TReview } from "@/shared/types/review";
import { createSlice } from "@reduxjs/toolkit";

interface IReviewsState {
  reviews: TReview[];
}

const initialState: IReviewsState = {
  reviews: [
    {
      id: 1,
      name: "Трёхпроцентная сгущёнка",
      image:
        "https://static.insales-cdn.com/images/products/1/3583/395455999/Сгущёнка.jpg",
      rating: 5,
      comment:
        "The delivery is incredibly quick, it arrives before even I can be spoiled.",
      postedOn: "Novermber 2, 2024",
    },
    {
      id: 2,
      name: "Грузинская выскочка",
      image: "https://i.ibb.co.com/Pt3PnX0/2025-01-26-222805929.png",
      rating: 3.5,
      comment:
        "The website is not user-friendly. I had a hard time finding the clothes I wanted.",
      postedOn: "December 3, 2024",
    },
    {
      id: 3,
      name: "Усатый таракан",
      image: "https://i.ibb.co.com/DKDbKxh/image.png",
      rating: 5,
      comment: "I really love this shit, can't stop using it!",
      postedOn: "December 21, 2024",
    },
    {
      id: 4,
      name: "Игра 12+, уроды",
      image:
        "https://i.ibb.co/zW96Pb3V/2025-03-28-071318721.png",
      rating: 4.7,
      comment: "I love this website! It's so easy to find clothes I want.",
      postedOn: "December 15, 2024",
    },
    {
      id: 5,
      name: "Армейский уклонист",
      image:
        "https://foni.papik.pro/uploads/posts/2024-09/foni-papik-pro-kvwu-p-kartinki-belorusskii-flag-na-prozrachnom-f-3.png",
      rating: 4.7,
      comment: "It was delivered faster than I managed to escape.",
      postedOn: "January 7, 2025",
    },
    {
      id: 6,
      name: "Моржовый дворф",
      image: "https://leonardo.osnova.io/2319b740-b96c-449b-a98a-1676cda2e507",
      rating: 3,
      comment:
        "The clothes are costs more than my life but the quality is good.",
      postedOn: "December 21, 2024",
    },
    {
      id: 7,
      name: "Избиратель Трампа",
      image: "https://i.ibb.co.com/Df69pJJN/2025-03-17-041846046.png",
      rating: 4,
      comment: "It's good but the delivery is a bit slow.",
      postedOn: "February 21, 2025",
    },
    {
      id: 8,
      name: "Представитель северной столицы",
      image:
        "https://i.ibb.co/v4ZqjsHV/2025-03-28-071046765.png",
      rating: 2.5,
      comment: "I'd rather buy a beer than this garbage.",
      postedOn: "March 2, 2025",
    },
    {
      id: 9,
      name: "Bóbr Kurwa",
      image: "https://cdn.fishki.net/upload/post/201510/02/1682713/bobr4.jpg",
      rating: 4,
      comment:
        "ja pierdolę patrzcie co spotkałem! bóbr kurwa! ja pierdolę! jakie bydlę! bober! ej, kurwa, bober! bober, nie spierdalaj, mordo! chodź ty, kurwo, do mnie! bober! ale jesteś kurwa duży, ty! bober! ja pierdolę, pierwszy raz w życiu widzę bobra! jakie bydlę jebane! spierdolił do wody i się utopił!",
      postedOn: "December 21, 2024",
    },
    {
      id: 11,
      name: "Фанат Безрукова",
      image:
        "https://i.ibb.co.com/GfF9kC6N/image-2025-04-03-150205176.png",
      rating: 5,
      comment: `This store is so cool that I'm going to let you use my card to shop here. Here are the credits: 
      4242 4242 4242 4242 
      09/27 228 
      Paster Mack`,
      postedOn: "January 18, 2025",
    },
    {
      id: 10,
      name: "Empthy.",
      image:
        "https://i.ibb.co.com/Q315GMJ8/image-2025-04-03-151009406.png",
      rating: 4.5,
      comment: `Avacado Pajamas fits exelent and the quality is good enough.`,
      postedOn: "January 18, 2025",
    },
  ],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
});

export default reviewsSlice.reducer;

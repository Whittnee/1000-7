import { RootState } from "@/entities/store";

export const selectReviews = (state: RootState) => state.reviewsReducer.reviews
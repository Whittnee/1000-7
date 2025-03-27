import { cartReducer } from "@/entities/cart";
import { clothesReducer } from "@/entities/clothes";
import { productReducer } from "@/entities/product";
import { reviewsReducer } from "@/entities/reviews";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
  TypedUseSelectorHook,
} from 'react-redux'
export const rootReducer = combineReducers({
  clothesReducer,
  reviewsReducer,
  cartReducer,
  productReducer
})

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store
import { getProductsThunk } from "@/entities/clothes/model/clothesSlice";
import { useDispatch } from "@/entities/store";
import { useEffect } from "react";

export const useClothes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
};

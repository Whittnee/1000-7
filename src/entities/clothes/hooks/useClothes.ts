import { getProductsThunk } from "@/entities/clothes/model/productsSlice";
import { useDispatch } from "@/entities/store";
import { useEffect } from "react";

export const useClothes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
};

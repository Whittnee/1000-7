import { getCartThunk } from "@/entities/cart/model/cartSlice";
import { useDispatch } from "@/entities/store";
import { useUserId } from "@/shared/hooks/useUserId";
import { useEffect } from "react";

export const useCart = () => {
  const dispatch = useDispatch();
  const userId = useUserId();

  useEffect(() => {
    dispatch(getCartThunk(userId));
  }, [dispatch, userId]);
};

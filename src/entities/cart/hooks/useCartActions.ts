import {
  addToCartThunk,
  removeFromCartThunk,
  updateItemCountThunk,
} from "@/entities/cart/model/cartSlice";
import { selectCartClothesById, selectIsLoadingCart } from "@/entities/cart/model/selectors";
import { useDispatch, useSelector } from "@/entities/store";
import { useCallback, useMemo, useState } from "react";

export const useCartActions = (
  id: number,
  userId: string,
) => {
  const dispatch = useDispatch();
  const [isMissing, setIsMissing] = useState<string[]>([]);
  const cartClothes = useSelector(selectCartClothesById(id));
  const loadingCart = useSelector(selectIsLoadingCart);

  const quantity = useMemo(() => cartClothes?.quantity || 0, [cartClothes])

  const onIncrement = useCallback(() => {
    dispatch(
      updateItemCountThunk({
        userId,
        productId: Number(id),
        quantity: quantity + 1,
      })
    );
  }, [userId, id, quantity, dispatch]);

  const onDecrement = useCallback(() => {
    dispatch(
      updateItemCountThunk({
        userId,
        productId: id,
        quantity: quantity - 1,
      })
    );
  }, [userId, id, quantity, dispatch]);

  const onRemove = useCallback(() => {
    dispatch(removeFromCartThunk({ userId, productId: id }));
  }, [userId, id, dispatch]);

  const onAddToCart = useCallback((selectedSize: string, selectedColor: string) => {
    const missing: string[] = [];
    if (!selectedSize) missing.push("size");
    if (!selectedColor) missing.push("color");
    setIsMissing(missing);
    if (missing.length > 0) return;
    dispatch(
      addToCartThunk({
        userId,
        productId: id,
        size: selectedSize,
        color: selectedColor,
      })
    );
  }, [userId, id, dispatch]);

  return {
    isMissing, loadingCart, quantity, onIncrement, onDecrement, onRemove, onAddToCart
  }
};

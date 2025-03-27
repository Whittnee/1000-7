import { addToCart, getCart, removeFromCart, updateItemCount } from "@/shared/api/cart";
import { TCartResponse, TUpdateCart } from "@/shared/types/cart";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCartThunk = createAsyncThunk(
  "cart/getCart",
  async (userId: string) => getCart(userId)
);

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async (data: TUpdateCart & { size: string, color: string}, { dispatch }) => {
    await addToCart(data);
    return dispatch(getCartThunk(data.userId)).unwrap();
  }
);

export const removeFromCartThunk = createAsyncThunk(
  "cart/removeFromCart",
  async (data: TUpdateCart, { dispatch }) => {
    await removeFromCart(data);
    return dispatch(getCartThunk(data.userId)).unwrap();
  }
);

export const updateItemCountThunk = createAsyncThunk(
  "cart/updateItemCount",
  async (data: TUpdateCart & { quantity: number }, { dispatch }) => {
    await updateItemCount(data);
    return dispatch(getCartThunk(data.userId)).unwrap();
  }
);

interface ICartState extends TCartResponse {
  isLoading: boolean;
}

const initialState: ICartState = {
  clothes: [],
  totalPrices: {
    subtotal: 0,
    total: 0,
    discount: 0,
    deliveryFee: 0,
  },
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartThunk.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      })
      .addCase(getCartThunk.fulfilled, (state, action) => {
        state.clothes = action.payload.clothes;
        state.totalPrices = action.payload.totalPrices;
        state.isLoading = false;
      })
      .addCase(addToCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      })
      .addCase(addToCartThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(removeFromCartThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromCartThunk.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      })
      .addCase(removeFromCartThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateItemCountThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateItemCountThunk.rejected, (state, action) => {
        console.log(action.error.message);
        state.isLoading = false;
      })
      .addCase(updateItemCountThunk.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default cartSlice.reducer;
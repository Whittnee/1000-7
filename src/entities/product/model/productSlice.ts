import { getProduct } from "@/shared/api/product";
import { TClothes } from "@/shared/types/clothes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductThunk = createAsyncThunk(
  "product/getProduct",
  async (productId: number) => getProduct(productId)
)

interface IProductState {
  product: TClothes | null;
  isLoading: boolean;
}

const initialState: IProductState = {
  product: null,
  isLoading: false,
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.product = action.payload
        state.isLoading = false;
      })
  }
})

export default productSlice.reducer

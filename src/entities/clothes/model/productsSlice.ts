import { getProducts } from "@/shared/api/product";
import { TSlicedProduct } from "@/shared/types/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async () => getProducts()
)

interface IProductsState {
  products: TSlicedProduct[];
  isLoading: boolean
}

const initialState: IProductsState = {
  products: [],
  isLoading: false
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message)
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload
        state.isLoading = false;
      })
  }
});

export default productsSlice.reducer;

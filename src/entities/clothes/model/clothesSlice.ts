import { getProducts } from "@/shared/api/clothes";
import { TSlicedClothes } from "@/shared/types/clothes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductsThunk = createAsyncThunk(
  "clothes/getProducts",
  async () => getProducts()
)

interface IClothesState {
  clothes: TSlicedClothes[];
  isLoading: boolean
}

const initialState: IClothesState = {
  clothes: [],
  isLoading: false
};

const clothesSlice = createSlice({
  name: "clothes",
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
        state.clothes = action.payload
        state.isLoading = false;
      })
  }
});

export default clothesSlice.reducer;

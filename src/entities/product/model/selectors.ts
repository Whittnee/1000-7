import { RootState } from "@/entities/store"

export const selectProduct = (state: RootState) => state.productReducer.product
export const selectIsLoadingProduct = (state: RootState) => state.productReducer.isLoading
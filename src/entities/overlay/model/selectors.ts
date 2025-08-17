import { RootState } from "@/entities/store";

export const selectOverlayKey = (state: RootState) => state.overlayReducer.key
export const selectOnCloseCallback = (state: RootState) => state.overlayReducer.onCloseCallback
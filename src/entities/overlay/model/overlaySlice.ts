import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type overlay = 'successOrder' | 'successSubscription' | null;

interface IOverlayState {
  key: overlay
  onCloseCallback?: () => void | undefined
}

const initialState: IOverlayState = {
  key: null
}

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    showOverlay: (state, action: PayloadAction<{key: Exclude<overlay, null>, onCloseCallback?: () => void }>) => {
      state.key = action.payload.key
      state.onCloseCallback = action.payload.onCloseCallback
    },
    hideOverlay: (state) => {
      state.key = null
      state.onCloseCallback = undefined
    }
  }
})

export default overlaySlice.reducer
export const {showOverlay, hideOverlay} = overlaySlice.actions


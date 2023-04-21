import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from "../store";

export const frameSlice = createSlice({
  name: "frames",
  initialState: 0,
  reducers: {
    nextFrame: (state, action: PayloadAction<number>) => {
      return state === action.payload - 1 ? 0 : state + 1;
    },
    prevFrame: (state, action: PayloadAction<number>) => {
      return state === 0 ? action.payload - 1 : state - 1;
    },
  },
});

export const { nextFrame, prevFrame } = frameSlice.actions;
export const getCurrentFrame = (state: RootState) => state.frames;
export default frameSlice.reducer;

export const getFramesAsync =
  (totalFrames: number, direction: "prev" | "next"): AppThunk =>
  (dispatch) => {
    const action = direction === "prev" ? prevFrame : nextFrame;
    return dispatch(action(totalFrames));
  };

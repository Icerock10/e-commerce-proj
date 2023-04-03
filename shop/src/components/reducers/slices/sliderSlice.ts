import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from '../store';


export const sliderSlice = createSlice({
	name: "slider",
	initialState: 0,
	reducers: {
	  nextFrame: (state, action: PayloadAction<number>) => {
		 return state === action.payload - 1 ? 0 : state + 1
	  },
	  prevFrame: (state, action: PayloadAction<number>) => {
		return state === 0 ? action.payload - 1 : state - 1
	 },
	}
 });

 export const { nextFrame, prevFrame } = sliderSlice.actions;
 export const getCurrentFrame = (state: RootState) => state.slider;
 export default sliderSlice.reducer;


 export const getFramesAsync =
  (totalFrames: number, direction: 'prev' | 'next'): AppThunk =>
  (dispatch) => {
	if (direction ==='prev') {
		return dispatch(prevFrame(totalFrames));
	}
      return dispatch(nextFrame(totalFrames));
  };
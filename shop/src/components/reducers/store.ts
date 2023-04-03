import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import sliderSlice from './slices/sliderSlice';


export const store = configureStore({
  reducer: {
    products: productsSlice,
	 slider: sliderSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
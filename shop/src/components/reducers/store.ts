import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import frameSlice from './slices/frameSlice';
import switcherSlice from './slices/switcherSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
	 frames: frameSlice,
	 switcher: switcherSlice
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
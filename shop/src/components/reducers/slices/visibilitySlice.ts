import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';
import { VisibilityConfig } from "../../interfaces/interfaces";

const visibilityState: VisibilityConfig = {
	isSidebarShown: false,
	isLangListShown: false,
	isCartShown: false,
	isThankNotificationShown: false,
	isPopupShown: false,
}

export const visibilitySlice = createSlice({
	name: "visibility",
	initialState: visibilityState,
	reducers: {
		toggleVisibility: (state, action: PayloadAction<string>) => {
			const fieldName = action.payload as keyof VisibilityConfig;
			state[fieldName] = !state[fieldName];
		 },
	}
 });

export const { toggleVisibility } = visibilitySlice.actions;
export const getVisibilityState = (state: RootState) => state.visibility;
export default visibilitySlice.reducer;

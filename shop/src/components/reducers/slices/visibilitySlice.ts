import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';


interface visibilityConfig {
	isSidebarShown: boolean,
	isLangListShown: boolean,
}

const visibilityState: visibilityConfig = {
	isSidebarShown: false,
	isLangListShown: false,
}

export const visibilitySlice = createSlice({
	name: "visibility",
	initialState: visibilityState,
	reducers: {
		toggleVisibility: (state, action: PayloadAction<string>) => {
			const fieldName = action.payload as keyof visibilityConfig;
			state[fieldName] = !state[fieldName];
		 },
	}
 });

export const { toggleVisibility } = visibilitySlice.actions;
export const getVisibilityState = (state: RootState) => state.visibility;
export default visibilitySlice.reducer;
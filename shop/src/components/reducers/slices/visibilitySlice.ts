import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../store';


interface visibilityConfig {
	isSidebarShown: boolean,
	isLangListShown: boolean,
	dropdown: boolean,
}

const visibilityState: visibilityConfig = {
	isSidebarShown: false,
	isLangListShown: false,
	dropdown: false
}


export const visibilitySlice = createSlice({
	name: "visibility",
	initialState: visibilityState,
	reducers: {
		toggleVisibility: (state, action: PayloadAction<string>) => {
			const fieldName = action.payload as keyof visibilityConfig;
			state[fieldName] = !state[fieldName]
		 },
		 dropdownToggler: (state, action: PayloadAction<boolean>) => {
				 state.dropdown = action.payload
		 }
	}
 });

export const { toggleVisibility, dropdownToggler } = visibilitySlice.actions;
export const getVisibilityState = (state: RootState) => state.visibility;
export default visibilitySlice.reducer;
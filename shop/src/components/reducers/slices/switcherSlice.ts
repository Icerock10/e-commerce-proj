import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '.././store';

const currentLanguage: string | null = localStorage.getItem("i18nextLng");

interface SwitcherValue {
	languageText: string,
}

const switcher: SwitcherValue = {
	languageText: currentLanguage === 'fr' ? 'French' : 'English',
}

export const switcherSlice = createSlice({
	name: 'switcher',
	initialState: switcher,
	reducers: {
		changeLanguage: (state, action: PayloadAction<string>) => {
			state.languageText = action.payload;
		},
	}
})

export const { changeLanguage } = switcherSlice.actions;
export const getLanguageText = (state: RootState) => state.switcher.languageText;
export default switcherSlice.reducer;
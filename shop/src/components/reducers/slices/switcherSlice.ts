import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppThunk } from '.././store';

const currentLanguage: string | null = localStorage.getItem("i18nextLng");

interface SwitcherProps {
	isLangListShown: boolean,
	languageText: string,
	isSidebarShown: boolean
}

const switcher: SwitcherProps = {
	isLangListShown: false,
	languageText: currentLanguage === 'fr' ? 'French' : 'English',
	isSidebarShown: false
}

export const switcherSlice = createSlice({
	name: 'switcher',
	initialState: switcher,
	reducers: {
		setIsLangListShown: (state, action: PayloadAction<boolean>) => {
			state.isLangListShown = action.payload;
		},
		setLanguageText: (state, action: PayloadAction<string>) => {
			state.languageText = action.payload;
		},
		setisSidebarShown: (state, action: PayloadAction<boolean>) => {
			state.isSidebarShown = action.payload;
		}
	}
})

export const getSideBarState = (state: RootState) => state.switcher.isSidebarShown;
export const { setIsLangListShown, setLanguageText, setisSidebarShown } = switcherSlice.actions;
export default switcherSlice.reducer;
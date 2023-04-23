import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.././store';
import { LocalStorageKeys } from '../../../enums/localStorageKeys';

const currentLanguage: string | null = localStorage.getItem(LocalStorageKeys.I_18_NEXT_LANG);

const switcher: { languageText: string } = {
  languageText: currentLanguage === 'fr' ? 'French' : 'English',
};

export const switcherSlice = createSlice({
  name: 'switcher',
  initialState: switcher,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.languageText = action.payload;
    },
  },
});

export const { changeLanguage } = switcherSlice.actions;
export const getLanguageText = (state: RootState) => state.switcher.languageText;
export default switcherSlice.reducer;

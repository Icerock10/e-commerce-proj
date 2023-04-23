import { clsx } from 'clsx';

export const languageListClasses = (selectedLanguage: string, languageText: string) =>
  clsx('language__list_item', {
    selected: languageText === selectedLanguage,
  });

export const sliderClasses = (index: number, currentFrame: number) =>
  clsx('slider', {
    active: index === currentFrame,
  });

export const dropdownClasses = (dropdown: boolean): string => {
  return clsx('dropdown', {
    show: dropdown,
  });
};

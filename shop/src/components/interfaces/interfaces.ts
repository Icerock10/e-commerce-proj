export interface BreakpointsTypes {
	scrollTo: number
}

export interface ProductFields {
	id: number,
	category: string,
	heading: string,
	price: string,
	image: string,
	subCategory: string
	liked: boolean,
}

interface MenuItem {
	title: string;
	submenu?: MenuItem[];
 }
 
 export interface Menu {
	submenu: MenuItem[];
 }

 export interface IFrame {
	id: number;
	image: string;
 }

 export interface LanguageMap {
	[key: string]: string;
 }
 
 export interface FrameTitles {
	titles: string[];
	subTitles: string[];
 }

 export interface IProduct {
	products: ProductFields[],
	originalProducts: ProductFields[],
	resetPixels: boolean;
	value: string
}

export type SortByCategoryPayload = {
	product: string;
	categoryOrSubCategory: 'category' | 'subCategory';
	flag: boolean;
 };

 export type sortByKeyWordsPayload = {
	value: string,
	flag: boolean
}

export interface VisibilityConfig {
	isSidebarShown: boolean,
	isLangListShown: boolean,
}

export type IHeart = {
  id: number;
  liked: boolean;
};

export interface SubmenuOptions {
	items: {
	  title: string;
	  submenu: string[];
	};
	depthLevel: number;
	dropdownClass?: string;
 }
 export interface DropdownConfig {
	submenus: any;
	dropdown: boolean;
	depthLevel: number;
 }

 export interface Title {
	title: string;
	products: ProductFields[];
 }
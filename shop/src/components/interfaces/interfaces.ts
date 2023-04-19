export interface BreakpointsTypes {
	scrollTo: number
}

export const LIBRARIES: any = ["places"];
export interface ICart{
	productsInCart: ProductFields[]
	isChecked: boolean,
	checkBoxIds: number[],
}
 
 export type Quantity = {
	id: number,
	operand: string
}

export type LikesPayloadProps = {
	productId: number, 
	isProductLiked: boolean
}

 export interface ICheckboxProps {
	checkedProp: undefined | boolean;
	id: string | undefined;
	handleChange: (e: any) => void;
 }
export interface ProductFields {
	id: number,
	category?: string,
	heading?: string,
	price: string | number,
	image: string,
	subCategory: string
	liked: boolean,
	quantity: number
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
	originalProduts: ProductFields[],
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
export type DistanceProps = {
	leg: google.maps.DirectionsLeg | undefined;
	getToInitialPos: () => void;
 };

 export type LatLngLiteral = google.maps.LatLngLiteral;
 export type MapOptions = google.maps.MapOptions;
 export type DirectionsResult = google.maps.DirectionsResult;

export interface VisibilityConfig {
	isSidebarShown: boolean,
	isLangListShown: boolean,
	isCartShown: boolean,
	isThankNotificationShown: boolean
	isPopupShown: boolean
}
export type IChekout = {
	handleNotification: () => void;
	buttonTitle: string;
 };
 
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
	t?: any;
 }
 export type Menu = {
	title: string,
	submenu: string[]
}
 export interface DropdownConfig {
	submenus: any;
	dropdown: boolean;
	depthLevel: number;
 }

 export interface Title {
	title: string | undefined;
	index: number;
	t: (key: string) => typeof key;
	products: ProductFields[];
 }
import { ButtonRoles } from "../enums/buttonRoles";
import { categoryKeys } from "../enums/categoryKeys";
export interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: ButtonRoles;
  className: string;
  handleClick: () => void;
}
export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  className?: string;
}

export interface RoundedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  role?: ButtonRoles;
  className: string;
  handleClick: () => void;
  togglePopUp?: () => void;
}

export const LIBRARIES: any = ["places"];
export interface ICart {
  productsInCart: ProductFields[];
  isChecked: boolean;
  checkBoxIds: number[];
}

export interface Quantity {
  id: number;
  operand: string;
}

export interface LikesPayloadProps {
  productId: number;
  isProductLiked: boolean;
}
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
  value?: string | number;
}
export interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: () => void;
  className: string;
  checked: boolean;
}
export interface ICheckboxProps {
  checkedProp: undefined | boolean;
  id: string | undefined;
  handleChange: (e: any) => void;
}
export interface ProductFields {
  id: number;
  category?: string;
  heading?: string;
  price: string | number;
  image: string;
  subCategory: string;
  liked: boolean;
  quantity: number;
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
  products: ProductFields[];
  originalProduts: ProductFields[];
  resetPixels: boolean;
  value: string;
}

export interface SortByCategoryPayload {
  product: string;
  categoryOrSubCategory: categoryKeys;
  flag: boolean;
}

export interface sortByKeyWordsPayload {
  value: string;
  flag: boolean;
}
export interface DistanceProps {
  leg: google.maps.DirectionsLeg | undefined;
  getToInitialPos: () => void;
}

export interface LatLngLiteral extends google.maps.LatLngLiteral {}
export interface MapOptions extends google.maps.MapOptions {}
export interface DirectionsResult extends google.maps.DirectionsResult {}

export interface VisibilityConfig {
  isSidebarShown: boolean;
  isLangListShown: boolean;
  isCartShown: boolean;
  isThankNotificationShown: boolean;
  isPopupShown: boolean;
  isMapWidgetTextShown: boolean;
}
export interface IChekout {
  handleNotification: () => void;
  buttonTitle: string;
}

export interface IHeart {
  id: number;
  liked: boolean;
}

export interface SubmenuOptions {
  items: {
    title: string;
    submenu: string[];
  };
  depthLevel: number;
  dropdownClass?: string;
  t?: any;
}
export interface Menu {
  title: string;
  submenu: string[];
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

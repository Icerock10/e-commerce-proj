import React, { useState } from "react";
import {
  getVisibilityState,
  dropdownToggler,
} from "../../reducers/slices/visibilitySlice";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";

export const useSubmenu = () => {
  //   const { dropdown } = useAppSelector(getVisibilityState);
  //   const dispatch = useAppDispatch();

  const [dropdown, setDropdown] = useState(false);

  const toggleDropDown = ({ type, target: { textContent } }: any): void => {
    if (type === "click") {
      return setDropdown(!dropdown);
    }
    if (type === "mouseleave") return setDropdown(false);
    setDropdown(true);
  };

  return { toggleDropDown, dropdown };
};

// const toggleDropDown = ({ type, target: { textContent } }: any): void => {
// 	if (type === "click") {
// 	  return setDropdown(!dropdown);
// 	}
// 	if (type === "mouseleave") return setDropdown(false);
// 	setDropdown(true);
//  };

// export const useSubmenu = () => {
// 	const { dropdown } = useAppSelector(getVisibilityState);
// 	//   const [dropdown, setDropdown] = useState(false);
// 	const dispatch = useAppDispatch();

// 	const toggleDropDown = ({ type, target: { textContent } }: any): void => {
// 	  dispatch(dropdownToggler(true));
// 	  if (type === "click") {
// 		 dispatch(dropdownToggler(!dropdown));
// 	  }
// 	  if (type === "mouseleave") {
// 		 dispatch(dropdownToggler(false));
// 	  }
// 	};
// 	return { toggleDropDown, dropdown };
//  };

import React from "react";
import { HeartIcon } from "../../assets/images/icons/Icons";
import { useAppDispatch } from "../reducers/hooks";
import { sortByLikes } from "../reducers/slices/productsSlice";
import { IHeart } from "../interfaces/interfaces";

export const Heart = ({ id, liked }: IHeart) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const currentID = e.currentTarget.getAttribute("data-id");
    const productId = Number(currentID);
    if (productId === id) {
      dispatch(sortByLikes({ productId: id, isProductLiked: !liked }));
      return;
    }
  };

  return (
    <span
      onClick={(e) => handleChange(e)}
      data-id={id}
      style={{ display: "grid" }}
    >
      <HeartIcon fill={liked ? "red" : "#152642"} data={id} />
    </span>
  );
};

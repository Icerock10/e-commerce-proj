import React, { useState, useEffect } from "react";
import { HeartIcon } from "../../assets/images/icons/Icons";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { sortByLikes } from "../reducers/slices/productsSlice";
import { IHeart } from "../interfaces/interfaces";

export default function Heart({ id, liked }: IHeart) {
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
    <span onClick={(e) => handleChange(e)} data-id={id}>
      <HeartIcon fill={liked ? "red" : "#152642"} data={id} />
    </span>
  );
}

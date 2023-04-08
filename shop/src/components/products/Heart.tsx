import React, { useState, useEffect } from "react";
import { HeartIcon } from "../../assets/images/icons/Icons";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";
import { sortByLikes } from "../reducers/slices/productsSlice";

type IHeart = {
  id: number;
};

export default function Heart({ id }: IHeart) {
  const [isLiked, setLike] = useState<boolean>(() => {
    const heartItem = localStorage.getItem(`heart${id}`);
    return heartItem ? heartItem === "true" : false;
  });

  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(`heart${id}`, isLiked.toString());
    }
  }, [isLiked]);

  const handleChange = (e: any) => {
    const currentID = e.currentTarget.getAttribute("data-id");
    const productId = Number(currentID);
    if (productId === id) {
      setLike(!isLiked);
      localStorage.removeItem(`heart${id}`);
      return;
    }
  };

  return (
    <span onClick={(e) => handleChange(e)} data-id={id}>
      <HeartIcon fill={isLiked ? "red" : "#152642"} data={id} />
    </span>
  );
}

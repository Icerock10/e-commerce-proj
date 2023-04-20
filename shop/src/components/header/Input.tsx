import React from "react";
import { Search } from "../../assets/images/icons/Icons";
import { InputLogic } from "./InputLogic";
import { IconButton } from "../Buttons/IconButton";

export default function Input() {
  const { dispatch, value, getUserValue, sortProductsByUserInput } =
    InputLogic();

  return (
    <div className="input__group" style={{ position: "relative" }}>
      <input
        type="text"
        className="input__group_form"
        placeholder={"search"}
        onChange={(e) => dispatch(getUserValue(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && sortProductsByUserInput()}
        value={value}
      />
      <IconButton
        className="btn btn-secondary"
        handleClick={sortProductsByUserInput}
      >
        <Search />
      </IconButton>
    </div>
  );
}

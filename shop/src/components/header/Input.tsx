import React, { useState } from "react";
import { Search, Menu } from "../../assets/images/icons/Icons";
import { InputLogic } from "./InputLogic";

export default function Input() {
  const { dispatch, value, getUserValue, sortProductsByUserInput } =
    InputLogic();

  return (
    <div className="input__group" style={{ position: "relative" }}>
      <input
        type="text"
        className="input__group_form"
        onChange={(e) => dispatch(getUserValue(e.target.value))}
        placeholder={"search"}
        onKeyDown={(e) => e.key === "Enter" && sortProductsByUserInput()}
        value={value}
      />
      <div className="input-group-append">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={sortProductsByUserInput}
          style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}

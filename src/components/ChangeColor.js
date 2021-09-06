import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const changeColorHandler = () => {
    dispatch(changeColor(color));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type a color eg: blue"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button onClick={changeColorHandler}>Change Color</button>
    </div>
  );
};

export default ChangeColor;

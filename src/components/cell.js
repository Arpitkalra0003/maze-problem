import React from "react";
import mario from "../images/mario.jpg";
import bg from "../images/bg.png";

const Cell = (props) => {
  const cls = props.value === 0 ? "square zero" : "square";
  return props.value === 0 ? (
    <img
      className={cls}
      onClick={() => props.clickHandler()}
      alt="person"
      style={{ width: 60 }}
      src={mario}
    />
  ) : (
    <img
      className={cls}
      onClick={() => props.clickHandler()}
      style={{ width: 60 }}
      alt={props.value}
      src={bg}
    />
  );
};

export default Cell;

import React from "react";
import useMyWidth from "../hooks/MyHook";

const MyWidth = () => {
  const myWidth = useMyWidth();
  return (
    <div>
      <h2>MyWidth</h2>
      <h3>{myWidth}</h3>
    </div>
  );
};

export default MyWidth;

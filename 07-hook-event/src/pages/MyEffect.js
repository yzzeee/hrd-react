import React from "react";
import wisdom from "../assets/img/wisdom.jpg";

const MyEffect = () => {
  // 브라우저의 넓이를 의미하는 상태값
  const [mySize, setMySize] = React.useState(320);

  // 이미지의 밝기를 위한 상태값
  const [myBrightness, setMyBrightNess] = React.useState(100);

  return (
    <div>
      <h2>MyEffect</h2>

      <div>
        <input
          type="range"
          min="40"
          max="640"
          value={mySize}
          step="1"
          onChange={(e) => {
            setMySize(e.currentTarget.value);
          }}
        ></input>
      </div>
      <div>
        <input
          type="range"
          min="40"
          max="640"
          value={myBrightness}
          step="1"
          onChange={(e) => {
            setMyBrightNess(e.currentTarget.value);
          }}
        ></input>
      </div>
      <img
        alt="Hello, React"
        width={mySize}
        // src="http://placehold.it/640x480?text='ILOVEMING'"
        src={wisdom}
        style={{ filter: "brightness(" + myBrightness + "%)" }}
      ></img>
    </div>
  );
};

export default MyEffect;

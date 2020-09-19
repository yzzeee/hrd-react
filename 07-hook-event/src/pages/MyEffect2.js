import React from "react";
import wisdom from "../assets/img/wisdom.jpg";

const MyEffect = () => {
  const [mySize, setMySize] = React.useState(320);

  // 이미지의 밝기를 위한 상태값
  const [myBrightness, setMyBrightness] = React.useState(100);

  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = React.useState(window.innerWidth);

  // 사용자 정의 함수.
  const onMyResize = () => setMyWidth(window.innerWidth);

  /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨  */
  React.useEffect(() => {
    console.log(
      // 링크에 의한 화면 진입 시
      "[MyEffect 1] %s ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능",
      new Date()
    );
    window.addEventListener("resize", onMyResize);
  }, []);

  /** 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때마다 매번 실행됨 */
  React.useEffect(() => {
    console.log(
      "[MyEffect 2] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출 됨",
      new Date()
    );
  });

  /** 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props값이 변경될 때만 실행됨 */
  React.useEffect(() => {
    console.log("[MyEffect 3] %s ::: myBrightness 값이 변경됨", new Date());
  }, [myBrightness]);

  /** state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨 */
  React.useEffect(() => {
    return () => {
      console.log(
        "[MyEffect 4] %s ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야할 기능",
        new Date()
      );
      window.removeEventListener("resize", onMyResize);
    };
  });

  return (
    <div>
      <h2>MyEffect</h2>
      {myWidth}
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
            setMyBrightness(e.currentTarget.value);
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

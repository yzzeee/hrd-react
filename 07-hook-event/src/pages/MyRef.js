import React from "react";
// 1) route의 기능을 <Route>에 명시하지 않더라도 사용할 수 있도록 도와주는 함수 참조
import { withRouter } from "react-router-dom";
import $ from "jquery";

// 3) withRouter()를 사용할 경우 <Route>없이 router기능 사용 가능
/**
 * React에서 document.getElementById(...)에 해당하는 기능을 사용하는 방법
 */
const MyRef = ({ history }) => {
  // HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
  const myDname = React.useRef();
  const myLoc = React.useRef();

  return (
    <div>
      <h2>MyRef</h2>
      {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
      <div>
        <label
          htmlFor="dname"
          style={{ display: "inline-block", width: "80px" }}
        >
          학과명
        </label>
        <input type="text" ref={myDname} id="dname"></input>
      </div>
      <div>
        <label htmlFor="loc" style={{ display: "inline-block", width: "80px" }}>
          학과위치
        </label>
        <input type="text" ref={myLoc} id="loc"></input>
      </div>

      <button
        // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
        // --> "참조변수.current" 해당 HTML을 의미하는 Javascript DOM 객체
        onClick={(e) => {
          const params = {
            dname: myDname.current.value,
            loc: myLoc.current.value,
          };

          $.post(
            "http://itpaper.co.kr/demo/react/api/dept_write.php",
            params,
            (json) => {
              console.log(json.item);
              history.push("/stateeffectex");
            }
          );
        }}
      >
        클릭
      </button>
    </div>
  );
};

// 2) 컴포넌트를 export할 때 withRouter() 함수로 걸러서 내보낸다.
export default withRouter(MyRef);
